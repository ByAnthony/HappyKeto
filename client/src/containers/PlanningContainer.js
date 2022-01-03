import {useState, useEffect} from 'react';
import HappyKetoService from '../services/HappyKetoService';
import Planning from '../components/Planning.js';

const PlanningContainer = () => {

    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        HappyKetoService.getRecipes()
        .then(recipes => setAllRecipes(recipes))
    }, []);

    // function findBreakfast(recipes){
    //     const breakfast = recipes.filter(recipe => recipe.type === "Breakfast");
    //     const indexSausageEggSalad = breakfast.indexOf(recipes.name === "Sausage And Egg Salad");
    //     breakfast.splice(indexSausageEggSalad, 1);
    //     return breakfast;
    // }

    function findRecipesByType(recipes, meal){
        const recipesByType = recipes.filter(recipe => recipe.type === meal);
        return recipesByType;
    }

    const recipesForBreakfast = findRecipesByType(allRecipes, "Breakfast");
    const recipesForDinner = findRecipesByType(allRecipes, "Dinner");
    const recipesForFish = findRecipesByType(allRecipes, "Fish");
    const recipesForMeat = findRecipesByType(allRecipes, "Meat");
    const recipesForVegetables = findRecipesByType(allRecipes, "Vegetables");

    function typicalBreakfast(recipes){
        const sausageAndEggSalad = recipes.find(recipe => recipe.name === "Sausage And Egg Salad");
        return sausageAndEggSalad;
    }

    const breakfastMondayToFriday = typicalBreakfast(recipesForBreakfast);

    // const mondayBreakfast = new Array(mondayBreakfastRecipe(recipesForBreakfast));
    // const mondayDinner = new Array(recipesForDinner[Math.floor(Math.random() * recipesForDinner.length)]);
    // const mondayMenu = [...mondayBreakfast, ...mondayDinner];

    return(
        <div className="main">
            <h1>Your Planning</h1>
            <div className="line"></div>
            <div className="planning-container">
                <Planning breakfastMondayToFriday={breakfastMondayToFriday}/>
            </div>
        </div>
    );

}

export default PlanningContainer;
