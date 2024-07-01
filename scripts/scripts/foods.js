class food {
    id;
    name;
    nutrition;

    constructor(food_details) {
        this.id = food_details.id;
        this.name = food_details.name;
        this.nutrition = food_details.nutrition;
    }
}

export const foods = [
    {
        id: '1',
        name: 'rice',
        nutrition: {
            carbohydrates_mg: 450,
            protein_mg: 20,
            fat_mg: 0
        }
    },

    {
        id: '2',
        name: 'chicken breast',
        nutrition: {
            carbohydrates_mg: 0,
            protein_mg: 310,
            fat_mg: 36
        }
    },

    {
        id: '3',
        name: 'avocado',
        nutrition: {
            carbohydrates_mg: 90,
            protein_mg: 20,
            fat_mg: 150
        }
    },
    {
        id: '4',
        name: 'egg',
        nutrition: {
            carbohydrates_mg: 11,
            protein_mg: 130,
            fat_mg: 110
        }
    },
    {
        id: '5',
        name: 'beef',
        nutrition: {
            carbohydrates_mg: 0,
            protein_mg: 260,
            fat_mg: 170
        }
    },
    {
        id: '6',
        name: 'broccoli',
        nutrition: {
            carbohydrates_mg: 36,
            protein_mg: 28,
            fat_mg: 4
        }
    },
    {
        id: '7',
        name: 'lettuce',
        nutrition: {
            carbohydrates_mg: 20,
            protein_mg: 10,
            fat_mg: 2
        }
    },
    {
        id: '8',
        name: 'green peas',
        nutrition: {
            carbohydrates_mg: 140,
            protein_mg: 50,
            fat_mg: 4
        }
    },
    {
        id: '9',
        name: 'banana',
        nutrition: {
            carbohydrates_mg: 220,
            protein_mg: 10,
            fat_mg: 2
        }
    },
    {
        id: '10',
        name: 'tomato',
        nutrition: {
            carbohydrates_mg: 170,
            protein_mg: 20,
            fat_mg: 1
        }
    },
    {
        id: '11',
        name: 'salmon',
        nutrition: {
            carbohydrates_mg: 0,
            protein_mg: 200,
            fat_mg: 130
        }
    }
].map((food_details) => {
    return new food(food_details);
})