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
            //target_calories: 0
        };
    }
}

export function get_target_calories () {
    return (target.target_carbohydrates * 4 + target.target_protein * 4 + target.target_fat * 9)
}