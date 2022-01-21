import React from "react";

const Monday = ({monday, sideList, updateMonday}) => {

    function subtractProtein(recipes){
        const totalProtein = recipes.reduce((total, recipe) => total + recipe.protein, 0);
        const remainingProtein = 99 - totalProtein.toFixed(1);
        return remainingProtein.toFixed(1);
    }

    function subtractCarbs(recipes){
        const totalCarbs = recipes.reduce((total, recipe) => total + recipe.carbohydrate, 0);
        const remainingCarbs = 25 - totalCarbs.toFixed(1);
        return remainingCarbs.toFixed(1);
    }

    function subtractFat(recipes){
        const totalFat = recipes.reduce((total, recipe) => total + recipe.fat, 0);
        const remainingFat = 128 - totalFat.toFixed(1);
        return remainingFat.toFixed(1);
    }

    function addCalories(recipes){
        const totalCalories = recipes.reduce((total, recipe) => total + recipe.calories, 0);
        return totalCalories;
    }

    const filterProteinSide = function(recipes){
        const sideRecipes = recipes.filter(recipe => recipe.protein < remainingProtein);
        return sideRecipes;
    }

    const filterCarbsSide = function(recipes){
        const sideRecipes = recipes.filter(recipe => recipe.carbohydrate < remainingCarbs);
        return sideRecipes;
    }

    const filterFatSide = function(recipes){
        const sideRecipes = recipes.filter(recipe => recipe.fat < remainingFat);
        return sideRecipes;
    }

    const findDinnerRecipes = function(recipes){
        const dinnerRecipes = recipes.filter(recipe => recipe.type !== 'Breakfast');
        return dinnerRecipes;
    }

    // const handleUpdateMonday = function(){
    //     const copiedMonday = [...monday];
    //     copiedMonday.push(side);
    //     updateMonday(copiedMonday);
    // }

    const sides = sideList;

    const remainingProtein = subtractProtein(monday);
    const remainingCarbs = subtractCarbs(monday);
    const remainingFat = subtractFat(monday);

    const proteinFilterSide = filterProteinSide(sides);
    const carbsFilterSide = filterCarbsSide(proteinFilterSide);
    const fatFilterSide = filterFatSide(carbsFilterSide);

    const side = fatFilterSide
        .sort(function(){ return .5 - Math.random() })
        .slice(0, 1);

    const recipesType = monday.map(recipe => recipe.type);
    if(recipesType.includes('Meat')){
        Array.prototype.push.apply(monday, side);
        // handleUpdateMonday();
    }else if(recipesType.includes('Fish')){
        Array.prototype.push.apply(monday, side);
        // handleUpdateMonday();
    }

    const breakfast = monday.slice(0, 1);
    const dinner = findDinnerRecipes(monday);

    const breakfastMenu = breakfast.map(recipe => {
        return(
            <p key={recipe._id}>{recipe.name}</p>
        );
    });

    const dinnerMenu = dinner.map(recipe => {
        if(dinner.length === 2){
            return(
                <p key={recipe._id}>{recipe.name}</p>
            );
        }
        return(
            <p key={recipe._id}>{recipe.name}</p>
        );
    });
    
    return (
        <>
            <td className="macrooftheday">
                <table>
                    <tbody>
                        <tr>
                            <th className="macro">Protein</th>
                            <th className="macro">Carbs</th>
                            <th className="macro">Fat</th>
                        </tr>
                        <tr>
                            <td className="total-gram">{subtractProtein(monday)}</td>
                            <td className="total-gram">{subtractCarbs(monday)}</td>
                            <td className="total-gram">{subtractFat(monday)}</td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td>
                <table className="recipesoftheday">
                    <tbody>
                        <tr>
                            <th className="meal-type">Breakfast</th>
                            <th className="meal-type">Dinner</th>
                        </tr>
                        <tr>
                            <td className="menuoftheday">
                                {breakfastMenu}
                            </td>
                            <td className="menuoftheday">
                                {dinnerMenu}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td className="calo">
                <table className="caloriesoftheday">
                    <tbody>
                        <tr>
                            <th className="macro">Calories</th>
                        </tr>
                        <tr>
                            <td className="total-gram">{addCalories(monday)}</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </>
    );

}

export default Monday;
