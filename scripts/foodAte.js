import { nutrition_calculation } from "./nutrition.js";

export let foodAte;

export function load_From_localStorage () {
    foodAte = JSON.parse(localStorage.getItem('foodAte'));
    if (!foodAte) {
        foodAte = [

        ];
    }
    
}

export function clear_localStorage () {
    foodAte = [];
    localStorage.setItem('foodAte',JSON.stringify(foodAte));
}

export const food_ate_calories = {
    carbohydrates_mg: 0,
    protein_mg: 0,
    fat_mg: 0
};

export function calculate_total_calories () {
    return (food_ate_calories.carbohydrates_mg *4 + food_ate_calories.protein_mg * 4 + food_ate_calories.fat_mg * 9);
}

export function update_food_ate_calories () {
    food_ate_calories.carbohydrates_mg = 0;
    food_ate_calories.protein_mg = 0;
    food_ate_calories.fat_mg = 0;
    foodAte.forEach((item) => {
        nutrition_calculation(item);
        console.log(food_ate_calories);
    })
    console.log(food_ate_calories);
    return;
}