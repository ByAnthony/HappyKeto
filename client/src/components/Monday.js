import React from "react";

const Monday = ({monday}) => {

    // const typicalBreakfast = function(breakfastRecipes){
    //     const breakfast = breakfastRecipes.filter(recipe => recipe.name === "Sausage And Egg Salad");
    //     return breakfast;
    // }

    function addProtein(recipes){
        const totalProtein = recipes.reduce((total, recipe) => recipe.protein + total, 0);
        return totalProtein
    }
    function addCarbs(recipes){
        const totalCarbs = recipes.reduce((total, recipe) => recipe.carbohydrate + total, 0);
        return totalCarbs
    }
    function addFat(recipes){
        const totalFat = recipes.reduce((total, recipe) => recipe.fat + total, 0);
        return totalFat
    }
    function addCalories(recipes){
        const totalCalories = recipes.reduce((total, recipe) => recipe.calories + total, 0);
        return totalCalories
    }

    const menu = monday.map(recipe => {
        return(
            <td key={recipe._id} className='menu' colSpan={2}>{recipe.name}</td>
        );
    });

    return(
        <>
        <tr>
            <th className='macro'>Protein</th>
            <th className='macro'>Carbs</th>
            <th className='macro'>Fat</th>
            <th className='macro'>Calories</th>
        </tr>
        <tr>
            <td className='total-gram'>{addProtein(monday)}</td>
            <td className='total-gram'>{addCarbs(monday)}</td>
            <td className='total-gram'>{addFat(monday)}</td>
            <td className='total-gram'>{addCalories(monday)}</td>
        </tr>
        <tr>
            <th className='meal-type' colSpan={2}>Breakfast</th>
            <th className='meal-type' colSpan={2}>Dinner</th>
        </tr>
        <tr>
            {menu}
        </tr>
        </>
    );

}

export default Monday;
