import {foods} from './foods.js';
import {foodAte,food_ate_calories,calculate_total_calories, load_From_localStorage, update_food_ate_calories,clear_localStorage} from './foodAte.js'
import { mg_to_g,carbo_to_carlories,protein_to_carlories,fat_to_carlories,nutrition_calculation } from './nutrition.js';
import {cancel_space,preprocess_of_input} from "./name_input_handle.js";


/*let foods = [];
fetch('../scripts/foundationDownload.json')
    .then(res => {
        res.json();
        console.log(res);
    })
    .then(data => {
        console.log(data);
        foods.push(JSON.parse(data));

    });

//console.log(foods[1]);
*/
//console.log(foods);
//let food_counter = 0;
load_From_localStorage();
console.log(food_ate_calories);

function render_homepage () {
update_food_ate_calories ();
const details_of_food = document.querySelector('.js_detail_of_food');
const nutrition_info = document.querySelector('.js_nutrition_info');
const clear_button = document.querySelector('.js_clear_button');
clear_button.addEventListener('click', () => {
    clear_localStorage();
    load_From_localStorage();
    console.log(`clear localStorage ${foodAte}`);
    render_homepage();
})
//let food_name_status = 0;
//let food_weight_status = 0;
details_of_food.innerHTML = generate_food_html();
nutrition_info.innerHTML = generate_calories_html();

function generate_calories_html () {
    let calories_html = 
    `
    <div class="nutrition_info_header">
        <div class="header_name">Nutrition Name</div>
        <div class="header_calories">Calories</div>
    </div>
    <div class="carbohydrates_info">
        <div class="name">Carbohydrates:</div>
        
        <div class="carbohydrates_calories">${carbo_to_carlories(mg_to_g(food_ate_calories.carbohydrates_mg))}</div>
    </div>

    <div class="protein_info">
        <div class="name">Protein:</div>
        <div class="carbohydrates_calories">${protein_to_carlories(mg_to_g(food_ate_calories.protein_mg))}</div>
    </div>
    <div class="fat_info">
        <div class="name">Fat:</div>
        <div class="fat_calories">${fat_to_carlories(mg_to_g(food_ate_calories.fat_mg))}</div>
    </div>
    <div class="nutrition_total">
        <div class="name">Total:</div>
        <div class="fat_calories">${mg_to_g(calculate_total_calories())}</div>
    </div> 
    `;

    return calories_html;
}







function update_foodAte() {
    const food_name = document.querySelector('.js_food_name');
    const food_weight = document.querySelector('.js_food_weight');
    const food_input = {
        name: food_name.value,
        weight: Number(food_weight.value)
    };
    foodAte.push(food_input);
    localStorage.setItem('foodAte',JSON.stringify(foodAte));
    console.log(foodAte);

}

function generate_food_html() {
    let food_html = `
    <div class="food_entity_header">
        <div class="food_name_container">
            Food:
            <input class="food_name js_food_name">

        </div>
        
        <div class="food_weight_container">
            weight:
            <input class="food_weight js_food_weight">
        </div>
        <button class="js_food_input_confirm_button">Confirm</button>
    </div>`

    foodAte.forEach((food) => {
        const food_name = food.name;
        const food_weight = food.weight;
        food_html += `
        <div class="food_input_display">
            <div class="food_name_container">
                ${food_name}
                
    
            </div>
            
            <div class="food_weight_container">
                ${food_weight}
                
            </div>
        </div>
        `
    })
    return food_html;
}

function food_entity_setup() {

    const food_input_confirm_button = document.querySelector('.js_food_input_confirm_button');

    food_input_confirm_button.addEventListener('click', () => {
        update_foodAte();
        update_food_ate_calories();
        //generate_food_html();
        render_homepage();
        
    })
    /*
    food_name.forEach((input) => {
        input.addEventListener('keypress', (event) => { 
        if (event.key === 'Enter') {
            console.log(`test food_name eventlistener food name status: ${food_name_status}`);
            food_name_status = 1;
            if ((food_name_status === 1) && (food_weight_status === 1)) {
                details_of_food.innerHTML += generate_food_html();
                food_name_status = 0;
                food_weight_status = 0;
                console.log(`after setup food_name_status:${food_name_status}`);
                food_entity_setup();
            }
        }

        
    })}
    )

    food_weight.forEach((input) => {
        input.addEventListener('keypress', (event) => { 
        if (event.key === 'Enter') {
            console.log(`test food_weight eventlistener food weight status: ${food_weight_status}`);
            food_weight_status = 1;
            if ((food_name_status === 1) && (food_weight_status === 1)) {
                details_of_food.innerHTML += generate_food_html();
                food_name_status = 0;
                food_weight_status = 0;
                food_entity_setup();
            }
        }

        
    })}
    )*/

    
}

food_entity_setup();
}
render_homepage();
//const food_entity = document.querySelector('.food_entity');
//console.log(`dataset test: ${food_entity.dataset.foodCounter}`);