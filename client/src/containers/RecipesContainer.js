import {useState, useEffect} from 'react';
import HappyKetoService from '../services/HappyKetoService';
import Recipes from '../components/Recipes.js';
import RecipeForm from '../components/RecipeForm';

const RecipesContainer = () => {

    const [recipes, setAllRecipes] = useState([]);

    useEffect(() => {
        HappyKetoService.getRecipes()
        .then(recipes => setAllRecipes(recipes))
    }, []);

    const createRecipe = newRecipe => {
        HappyKetoService.postRecipe(newRecipe)
        .then(savedRecipe => setAllRecipes([...recipes, savedRecipe]))
    };

    const deleteRecipe = idToDelete => {
        HappyKetoService.deleteRecipe(idToDelete)
        .then(() => {
            setAllRecipes(recipes.filter(recipe => recipe._id !== idToDelete))
        })
    };

    const updateRecipe = (updatedRecipe) => {
        const updatedRecipe_id = {
                name:updatedRecipe.name,
                type:updatedRecipe.type,
                protein:updatedRecipe.protein,
                carbohydrate:updatedRecipe.carbohydrate,
                fat:updatedRecipe.fat,
                calories:updatedRecipe.calories,
                portion:updatedRecipe.portion
        }
        HappyKetoService.updateRecipe(updatedRecipe_id, updatedRecipe._id);
        const updatedRecipeIndex = recipes.findIndex(recipe => recipe._id === updatedRecipe._id);
        const updatedRecipes = [...recipes];
        updatedRecipes[updatedRecipeIndex] = updatedRecipe;
        setAllRecipes(updatedRecipes);
    };

    return(
        <div className="main">
            <h1>Your Recipes</h1>
            <div className="line"></div>
            <div className="recipes-container">
                <RecipeForm createRecipe={createRecipe}/>
                <Recipes recipes={recipes} deleteRecipe={deleteRecipe} updateRecipe={updateRecipe}/>
            </div>
        </div>
    );

}

export default RecipesContainer;