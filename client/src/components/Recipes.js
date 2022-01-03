import React from 'react';
import './Recipes.css';

const Recipes = ({recipes, deleteRecipe, updateRecipe}) => {

    const allRecipes = recipes;

    function compareRecipes(recipe1, recipe2){
      if(recipe1.name < recipe2.name){
        return -1;
      }
      if(recipe1.name > recipe2.name){
        return 1;
      }
      return 0;
    }

    const recipesByName = allRecipes.sort(compareRecipes);

    const recipeNodes = recipesByName.map((recipe, index) => {

        const handleDeleteClick = () => {
            deleteRecipe(recipe._id)
        }

        const handleUpdateClick = () => {
            // updateRecipe({
            //     _id:recipe._id,
            //     name:recipe.name,
            //     type:recipe.type,
            //     protein:recipe.protein,
            //     carbohydrate:recipe.carbohydrate,
            //     fat:recipe.fat,
            //     calories:recipe.calories,
            //     portion:recipe.portion
            // });
          }

        const portions = () => {
          if(recipe.portion <= 1){
            return recipe.portion + " portion";
          }
          else{
            return recipe.portion + " portions";
          }
        }

        return <div className="recipe" key={index}>
          <table>
            <tbody>
              <tr>
                <td className="type" colSpan={4}>{recipe.type}</td>
              </tr>
              <tr>
                <td className="title" colSpan={4}>{recipe.name}</td>
              </tr>
              <tr>
                <td className="nutrition">Protein</td>
                <td className="nutrition">Carbs</td>
                <td className="nutrition">Fat</td>
                <td className="nutrition">Calories</td>
              </tr>
              <tr>
                <td className="grams">{recipe.protein}</td>
                <td className="grams">{recipe.carbohydrate}</td>
                <td className="grams">{recipe.fat}</td>
                <td className="grams">{recipe.calories}</td>
              </tr>
              <tr>
                <td className="portions" colSpan={4}>{portions()}</td>
              </tr>
              <tr>
                <td colSpan={2}><button className="recipes-button" type="button" onClick={handleUpdateClick}>Edit</button></td>
                <td colSpan={2}><button className="recipes-button" type="button" onClick={handleDeleteClick}>Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
    });

    return(
        <>
          {recipeNodes}
        </>
    );

};

export default Recipes;