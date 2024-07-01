import { calculate_total_calories, food_ate_calories, load_From_localStorage,update_food_ate_calories} from "./foodAte.js";
import { mg_to_g } from "./nutrition.js";
import {target, load_From_localStorage_target, get_target_calories} from "./target.js"
//export let target_calories = 0;
//export let target_carbohydrates = 0;
//export let target_protein = 0;
//export let target_fat = 0;

function calculate_percentage (numerator,denominator) {
    return  `${numerator * 100 / denominator}%`;
} 


function render_daily_nutrition_record_page () {
load_From_localStorage();
load_From_localStorage_target();
console.log(update_food_ate_calories());

console.log(food_ate_calories);
console.log(calculate_total_calories());


update_daily_target();
//const target_calories_input = document.querySelector('.js_target_calories_input');
//console.log(target_calories_input);


function update_target_calories () {
    //const target_calories_input = document.querySelector('.js_target_calories_input');
    const target_calories_input = document.querySelector('.js_target_calories_input');
    target.target_calories = Number(target_calories_input.value);
    localStorage.setItem('target',JSON.stringify(target));
    console.log(`update target_calories ${target.target_calories}`);
    return;
}

// Because we will regenerate html, therefore, we should have a function to re-addEventListener


function handle_target_nutrition_input () {
    const target_carbo_input = document.querySelector('.js_target_carbohydrates_input');
    const target_protein_input = document.querySelector('.js_target_protein_input');
    const target_fat_input = document.querySelector('.js_target_fat_input');
    target_carbo_input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            update_nutrition_target_data ('carbohydrates');
            console.log(`target_calories: ${target.target_calories}`);
            update_nutrition_target ();
            update_daily_target ();
        }
    });
    target_protein_input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            update_nutrition_target_data ('protein');
            console.log(`target_calories: ${target.target_calories}`);
            update_nutrition_target ();
            update_daily_target ();
        }
    });
    target_fat_input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            update_nutrition_target_data ('fat');
            console.log(`target_calories: ${target.target_calories}`);
            update_nutrition_target ();
            update_daily_target ();
        }
    });
}

//handler_today_target_input();


function update_daily_target () {
    const daily_target = document.querySelector('.js_daily_target_bar');
    daily_target.innerHTML = generate_target_bar_html();

}

function update_nutrition_target () {
    const total_consume = document.querySelector('.js_total_consume');
    total_consume.innerHTML = generate_total_consume_html();
    handle_target_nutrition_input();
}

update_nutrition_target ();
/*
function update_nutrition_target_data () {
    const target_carbo_input = document.querySelector('.js_target_carbohydrates_input');
    target_carbohydrates = Number(target_carbo_input.value);
    console.log(`update target_carbohydrates ${target_carbohydrates}`);
    const target_protein_input = document.querySelector('.js_target_protein_input');
    target_protein = Number(target_protein_input.value);
    console.log(`update target_protein ${target_protein}`);
    const target_fat_input = document.querySelector('.js_target_fat_input');
    target_carbohydrates = Number(target_carbo_input.value);
    console.log(`update target_fat ${target_fat}`);
    return;
}*/

function update_nutrition_target_data (nutrition) {
    const input = document.querySelector(`.js_target_${nutrition}_input`);
    if (nutrition === 'carbohydrates') {
        const target_carbo_input = document.querySelector('.js_target_carbohydrates_input');
        target.target_carbohydrates = Number(target_carbo_input.value);
        localStorage.setItem('target',JSON.stringify(target));
        console.log(`update target_carbohydrates ${target.target_carbohydrates}`);
    }

    if (nutrition === 'protein') {
        const target_protein_input = document.querySelector('.js_target_protein_input');
        target.target_protein = Number(target_protein_input.value);
        localStorage.setItem('target',JSON.stringify(target));
        console.log(`update target_protein ${target.target_protein}`);
    }

    if (nutrition === 'fat') {
        const target_fat_input = document.querySelector('.js_target_fat_input');
        target.target_fat = Number(target_fat_input.value);
        localStorage.setItem('target',JSON.stringify(target));
        console.log(`update target_fat ${target.target_fat}`);
    }

    return;
}


function generate_target_bar_html () {
    const a = get_target_calories() - mg_to_g(calculate_total_calories());
    console.log(`a: ${a}`);
    const html = `
    <div class="today_target">
    Today target:
    
    ${get_target_calories()}
    </div>
    <div class="today_eat">Today eat: ${mg_to_g(calculate_total_calories())}</div>
    <div class="remain_or_overeat">Remain: ${a}</div>
        `;
    return  html;
}

function generate_total_consume_html () {
    const ate_carbo = mg_to_g(food_ate_calories.carbohydrates_mg);
    const ate_protein = mg_to_g(food_ate_calories.protein_mg);
    const ate_fat = mg_to_g(food_ate_calories.fat_mg);
    const html = 
    `
        <div class="carbohydrates_consume">Carbohydrates:<input class="js_target_carbohydrates_input" placeholder="${ate_carbo}/${target.target_carbohydrates}已攝取: ${calculate_percentage(ate_carbo,target.target_carbohydrates)}"></div>
        <div class="protein_consume">Protein:<input class="js_target_protein_input" placeholder="${ate_protein}/${target.target_protein}已攝取: ${calculate_percentage(ate_protein,target.target_protein)}"></div>
        <div class="fat_consume">Fat:<input class="js_target_fat_input" placeholder="${ate_fat}/${target.target_fat}已攝取: ${calculate_percentage(ate_fat,target.target_fat)}"></div>
    `
    return html;
}

function generate_target_bar_html1 () {
    const calories_consume = food_ate_calories;
    const carbo_ratio = food_ate_calories.carbohydrates_mg

    const html = `
        <div class="carbohydrates_consume">Carbohydrates:</div>
        <div class="protein_consume">Protein</div>
        <div class="fat_consume">Fat</div>
        `;
    return  html;
}
}

render_daily_nutrition_record_page();