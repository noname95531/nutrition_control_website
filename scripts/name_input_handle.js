export function cancel_space (input) {
    let new_string;
    new_string = input.replace(/ /g, "");
    console.log(new_string);
    return new_string;
}

export function preprocess_of_input (input) {
    let new_string;
    new_string = cancel_space(input).toLowerCase();
    console.log(new_string);
    return new_string;
}