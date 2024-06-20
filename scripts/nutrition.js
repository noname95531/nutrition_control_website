import { foods } from "./foods.js";
import { food_ate_calories } from "./foodAte.js";

export function mg_to_g (num) {
    return num/1000;
}

export function carbo_to_carlories (carbo) {
    return carbo * 4;
}

export function protein_to_carlories (protein) {
    return protein * 4;
}

export function fat_to_carlories (fat) {
    return fat * 9;
}

export function nutrition_calculation (food) {
    const matching_food = foods.find((item) => item.name == food.name);
    console.log(matching_food);
    
    food_ate_calories.carbohydrates_mg += matching_food.nutrition.carbohydrates_mg * food.weight;
    food_ate_calories.protein_mg += matching_food.nutrition.protein_mg * food.weight;
    food_ate_calories.fat_mg += matching_food.nutrition.fat_mg * food.weight;
    return;
}

