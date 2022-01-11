import React, {useState, useEffect} from 'react';
import Monday from './Monday';

const Planning = ({recipesList}) => {

    const [updatedRecipes, setUpdatedRecipes] = useState([]);
    const [monday, setMonday] = useState([]);
    // const [tuesday, setTuesday] = useState([]);
    // const [wednesday, setWednesday] = useState([]);
    // const [thursday, setThursday] = useState([]);
    // const [friday, setFriday] = useState([]);
    // const [saturday, setSaturday] = useState([]);
    // const [sunday, setSunday] = useState([]);
 
    useEffect(() => {
        setUpdatedRecipes(recipesList)
    }, [recipesList]);

    const onClick = function(){
        const breakfastRecipes = findRecipesByType(updatedRecipes, "Breakfast");
        const breakfast = breakfastRecipes.filter(recipe => recipe.name === "Sausage And Egg Salad");
        const dinnerRecipes = findRecipesByType(updatedRecipes, "Dinner");

        let possibleDinner = dinnerRecipes
        possibleDinner.forEach(function(recipe){
            if((99 - breakfast[0].protein) - recipe.protein < 0){
                dinnerRecipes.shift();
            }
            else if((25 - breakfast[0].carbohydrate) - recipe.carbohydrate < 0){
                dinnerRecipes.shift();
            }
            else if((128 - breakfast[0].fat) - recipe.fat < 0){
                dinnerRecipes.shift();
            }
        })
        console.log(possibleDinner);

        // const dinner = new Array(possibleDinner[Math.floor(Math.random() * dinnerRecipes.length)]);
        // const mondayMenu = [...breakfast, ...dinner];
        // setMonday(mondayMenu);
    }

    const possibleDinner = function(breakfastRecipes, dinnerRecipes){
        let breakfast = breakfastRecipes;
        
    }

    const findRecipesByType = function(recipes, meal){
        const recipesByType = recipes.filter(recipe => recipe.type === meal);
        return recipesByType;
    }

    

    // function findBreakfastRecipes(recipes){
    //     const breakfast = recipes.filter(recipe => recipe.type === "Breakfast");
    //     const indexSausageEggSalad = breakfast.indexOf(recipes.name === "Sausage And Egg Salad");
    //     breakfast.splice(indexSausageEggSalad, 1);
    //     return breakfast;
    // }

    // const recipesForDinner = findRecipesByType(allRecipes, "Dinner");
    // const recipesForFish = findRecipesByType(allRecipes, "Fish");
    // const recipesForMeat = findRecipesByType(allRecipes, "Meat");
    // const recipesForVegetables = findRecipesByType(allRecipes, "Vegetables");

    // function typicalBreakfast(recipes){
    //     const sausageAndEggSalad = recipes.find(recipe => recipe.name === "Sausage And Egg Salad");
    //     return sausageAndEggSalad;
    // }

    // const breakfastMondayToFriday = new Array(typicalBreakfast(recipesForBreakfast));
    // const mondayDinner = recipesForDinner[Math.floor(Math.random() * recipesForDinner.length)];
    // const dinner = recipesForDinner[Math.floor(Math.random() * recipesForDinner.length)];
    // // const mondayMenu = [...dinner, ...mondayDinner];

    // function addProtein(recipes){
    //     const totalProtein = recipes.reduce((total, recipe) => recipe.protein + total, 0.0);
    //     return totalProtein
    // }

    // const mondayProtein = addProtein([dinner, mondayDinner]);

    // const mondayBreakfast = new Array(mondayBreakfastRecipe(recipesForBreakfast));
    // const mondayDinner = new Array(recipesForDinner[Math.floor(Math.random() * recipesForDinner.length)]);
    // const mondayMenu = [...mondayBreakfast, ...mondayDinner];

    return(
        <>
            <Monday monday={monday} onClick={onClick}/>
        </>
    )

}

export default Planning;
