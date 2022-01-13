import {useState, useEffect} from 'react';
import Planning from '../components/Planning';
import HappyKetoService from '../services/HappyKetoService';
import '../components/Planning.css';

const PlanningContainer = () => {

    const [recipesList, setRecipesList] = useState([]);

    useEffect(() => {
        HappyKetoService.getRecipes()
        .then(recipes => setRecipesList(shuffle(recipes)))
    }, []);

    function shuffle(recipes){
        let randomList = [];
        while(recipes.length !== 0){
            let randomIndex = Math.floor(Math.random() * recipes.length);
            randomList.push(recipes[randomIndex]);
            recipes.splice(randomIndex, 1);
        }
        recipes = randomList;
        return randomList;
    }

    const findBreakfastRecipes = function(recipes){
        const breakfastRecipes = recipes.filter(recipe => recipe.type === 'Breakfast');
        return breakfastRecipes;
    }

    const findTypicalBreakfast = function(recipes){
        const typicalBreakfast = recipes.filter(recipe => recipe.name === 'Sausage And Egg Salad');
        return typicalBreakfast;
    }

    const findWeekendBreakfast = function(recipes){
        const breakfastWeekend = recipes.filter(recipe => recipe.name !== 'Sausage And Egg Salad');
        return breakfastWeekend;
    }

    const findDinnerRecipes = function(recipes){
        const dinnerRecipes = recipes.filter(recipe => recipe.type !== 'Breakfast');
        return dinnerRecipes;
    }

    const filterProteinDinner = function(recipes){
        const dinnerRecipes = recipes.filter(recipe => recipe.protein < 68.8);
        return dinnerRecipes;
    }

    const filterCarbsDinner = function(recipes){
        const dinnerRecipes = recipes.filter(recipe => recipe.carbohydrate < 20.1);
        return dinnerRecipes;
    }

    const filterFatDinner = function(recipes){
        const dinnerRecipes = recipes.filter(recipe => recipe.fat < 70.9);
        return dinnerRecipes;
    }

    const allBreakfast = findBreakfastRecipes(recipesList);
    const typicalBreakfast = findTypicalBreakfast(allBreakfast); 
    const weekendBreakfast = findWeekendBreakfast(allBreakfast);

    const allDinner = findDinnerRecipes(recipesList);
    const proteinFilterDinner = filterProteinDinner(allDinner);
    const carbsFilterDinner = filterCarbsDinner(proteinFilterDinner);
    const fatFilterDinner = filterFatDinner(carbsFilterDinner);
    const possibleDinner = fatFilterDinner
        .sort(function(){ return .5 - Math.random() })
        .slice(0, 5);

    return(
        <div className="main">
            <h1>Your Planning</h1>
            <div className="line"></div>
                <div className="planner">
                    <Planning typicalBreakfast={typicalBreakfast} weekendBreakfast={weekendBreakfast} possibleDinner={possibleDinner}/>
                </div>
        </div>
    );

}

export default PlanningContainer;
