use recipe_list;
db.dropDatabase();

db.recipes.insertMany([
    {
        name: "Flowerless Bagel",
        portion: 1,
        day: 2,
        type: "Breakfast",
        protein: 14.9,
        carbohydrate: 2.5,
        fat: 24.2,
        calories: 290
    },
    {
        name: "Bread Roll",
        portion: 1,
        day: 2,
        type: "Breakfast",
        protein: 13.3,
        carbohydrate: 4.4,
        fat: 29.1,
        calories: 336
    },
    {
        name: "Poached Egg With Smoked Salmon And Avocado Salsa",
        portion: 1,
        day: 1,
        type: "Breakfast",
        protein: 23.4,
        carbohydrate: 2.6,
        fat: 28.3,
        calories: 366
    },
    {
        name: "Steamed Greens With Lemon Feta",
        portion: 2,
        day: 1,
        type: "Vegetables",
        protein: 20,
        carbohydrate: 5.2,
        fat: 36,
        calories: 442
    },
    {
        name: "Asparagus And Broad Been Salad",
        portion: 1,
        day: 2,
        type: "Vegetables",
        protein: 12,
        carbohydrate: 3.2,
        fat: 21.3,
        calories: 265
    },
    {
        name: "Mini Broccoli Pizza",
        portion: 1,
        day: 1,
        type: "Dinner",
        protein: 20,
        carbohydrate: 9,
        fat: 25,
        calories: 350
    },
    {
        name: "Gyros Salad",
        portion: 1,
        day: 2,
        type: "Dinner",
        protein: 14,
        carbohydrate: 20.1,
        fat: 22.8,
        calories: 377
    },
    {
        name: "Sausage and Veggie Frittata",
        portion: 2,
        day: 2,
        type: "Dinner",
        protein: 40,
        carbohydrate: 10,
        fat: 32,
        calories: 480
    },
    {
        name: "Melted Brie With Basil And Lemon Pesto",
        portion: 3,
        day: 1,
        type: "Dinner",
        protein: 28.8,
        carbohydrate: 6.9,
        fat: 75,
        calories: 828
    },
    {
        name: "Spinach And Rocket Salad With Cream Cheese Dressing",
        portion: 1,
        day: 1,
        type: "Dinner",
        protein: 25.5,
        carbohydrate: 6.3,
        fat: 79.8,
        calories: 855
    },
    {
        name: "Chicken With Almonds",
        portion: 1,
        day: 2,
        type: "Meat",
        protein: 25.1,
        carbohydrate: 7.6,
        fat: 24.9,
        calories: 354
    },
    {
        name: "Sausage In Curry",
        portion: 1,
        day: 1,
        type: "Meat",
        protein: 24,
        carbohydrate: 22,
        fat: 44,
        calories: 577
    },
    {
        name: "Chorizo And Prawns A La Sidra",
        portion: 1,
        day: 1,
        type: "Meat",
        protein: 54,
        carbohydrate: 13.2,
        fat: 56.7,
        calories: 780
    },
    {
        name: "Chicken Korma",
        portion: 1.5,
        day: 2,
        type: "Meat",
        protein: 51.6,
        carbohydrate: 7.65,
        fat: 37.35,
        calories: 574.5
    },
    {
        name: "Chicken Kievs",
        portion: 1,
        day: 2,
        type: "Meat",
        protein: 29.4,
        carbohydrate: 1.7,
        fat: 35.2,
        calories: 442.4
    },
    {
        name: "Frittata Caprese",
        portion: 1,
        day: 1,
        type: "Dinner",
        protein: 36,
        carbohydrate: 6,
        fat: 30,
        calories: 450
    },
    {
        name: "Balti Coconut Fish Curry",
        portion: 2,
        day: 2,
        type: "Dinner",
        protein: 66.8,
        carbohydrate: 11.6,
        fat: 48.8,
        calories: 756
    },
    {
        name: "Pork Roladi",
        portion: 1,
        day: 2,
        type: "Meat",
        protein: 60.6,
        carbohydrate: 8,
        fat: 18.6,
        calories: 438
    },
    {
        name: "Prosciutto And Basil Egg Cups",
        portion: 2,
        day: 1,
        type: "Breakfast",
        protein: 34.8,
        carbohydrate: 8,
        fat: 52.2,
        calories: 642
    },
    {
        name: "Thai Style Fish Cake",
        portion: 4,
        day: 2,
        type: "Dinner",
        protein: 88.4,
        carbohydrate: 8,
        fat: 34,
        calories: 712
    },
    {
        name: "Balinese Prawn Curry",
        portion: 2,
        day: 1,
        type: "Dinner",
        protein: 38.8,
        carbohydrate: 10.6,
        fat: 26,
        calories: 438
    },
    {
        name: "Stuffed Zuchinni",
        portion: 3,
        day: 1,
        type: "Dinner",
        protein: 42.9,
        carbohydrate: 8.7,
        fat: 60.9,
        calories: 759
    },
    {
        name: "Smoked Chicken With Cream Sauce",
        portion: 2,
        day: 1,
        type: "Meat",
        protein: 51,
        carbohydrate: 11,
        fat: 72,
        calories: 879
    },
    {
        name: "Turmeric Fish",
        portion: 2,
        day: 1,
        type: "Fish",
        protein: 23,
        carbohydrate: 0.6,
        fat: 10.6,
        calories: 200
    }
  ]);
  