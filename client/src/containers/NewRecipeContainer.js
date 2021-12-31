import {useState, useEffect} from 'react';
import HappyKetoService from '../services/HappyKetoService';
import RecipeForm from '../components/RecipeForm.js';

const NewRecipeContainer = () => {

    const [recipes, setAllRecipes] = useState([]);

    useEffect(() => {
        HappyKetoService.getRecipes()
        .then(recipes => setAllRecipes(recipes))
    }, []);

    const createRecipe = newRecipe => {
        HappyKetoService.postRecipe(newRecipe)
        .then(savedRecipe => setAllRecipes([...recipes, savedRecipe]))
    };

    return(
        <div className="main">
            <h1>Add Recipe</h1>
            <div className="line"></div>
            <RecipeForm createRecipe={createRecipe}/>
        </div>
    );

}

export default NewRecipeContainer;