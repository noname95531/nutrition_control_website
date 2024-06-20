//import { target_carbohydrates, target_fat, target_protein } from "./dailyNutritionRecord";

//import { target_carbohydrates, target_fat, target_protein } from "./dailyNutritionRecord";

export let target;

export function load_From_localStorage_target () {
    target = JSON.parse(localStorage.getItem('target'));
    if (!target) {
        target = {
            target_carbohydrates: 0,
            target_protein: 0,
            target_fat: 0,
            target_calories: 0
        };
    }
}