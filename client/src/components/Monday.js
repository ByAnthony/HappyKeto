import React from "react";

const Monday = ({monday, onClick}) => {

    // const typicalBreakfast = function(breakfastRecipes){
    //     const breakfast = breakfastRecipes.filter(recipe => recipe.name === "Sausage And Egg Salad");
    //     return breakfast;
    // }

    const handleClick = function(){
        onClick();
    };

    function addProtein(recipes){
        const totalProtein = recipes.reduce((total, recipe) => recipe.protein + total, 0.0);
        return totalProtein
    }
    function addCarbs(recipes){
        const totalCarbs = recipes.reduce((total, recipe) => recipe.carbohydrate + total, 0.0);
        return totalCarbs
    }
    function addFat(recipes){
        const totalFat = recipes.reduce((total, recipe) => recipe.fat + total, 0.0);
        return totalFat
    }
    function addCalories(recipes){
        const totalCalories = recipes.reduce((total, recipe) => recipe.calories + total, 0.0);
        return totalCalories
    }

    const menu = monday.map(recipe => {
        return(
            <div key={recipe._id}>
                <p>{recipe.name}</p>
            </div>
        );
    });

    return(
        <>
        <p>Monday</p>
        <p>{menu}</p>
        <p>{addProtein(monday)}</p>
        <p>{addCarbs(monday)}</p>
        <p>{addFat(monday)}</p>
        <p>{addCalories(monday)}</p>
        <button onClick={() => {handleClick()}} type="button">Plan your meals</button>
        </>
    );

}

export default Monday;
