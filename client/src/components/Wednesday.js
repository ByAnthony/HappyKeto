import React from "react";

const Wednesday = ({wednesday}) => {

    function subtractProtein(recipes){
        const totalProtein = recipes.reduce((total, recipe) => recipe.protein + total, 0);
        const remainingProtein = 99 - totalProtein.toFixed(1);
        return remainingProtein.toFixed(1);
    }
    function subtractCarbs(recipes){
        const totalCarbs = recipes.reduce((total, recipe) => recipe.carbohydrate + total, 0);
        const remainingCarbs = 25 - totalCarbs.toFixed(1);
        return remainingCarbs.toFixed(1);
    }
    function subtractFat(recipes){
        const totalFat = recipes.reduce((total, recipe) => recipe.fat + total, 0);
        const remainingFat = 128 - totalFat.toFixed(1);
        return remainingFat.toFixed(1);
    }
    function addCalories(recipes){
        const totalCalories = recipes.reduce((total, recipe) => recipe.calories + total, 0);
        return totalCalories;
    }

    const menu = wednesday.map(recipe => {
        return(
            <td key={recipe._id} className="menuoftheday">{recipe.name}</td>
        );
    });

    return(
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
                        <td className="total-gram">{subtractProtein(wednesday)}</td>
                        <td className="total-gram">{subtractCarbs(wednesday)}</td>
                        <td className="total-gram">{subtractFat(wednesday)}</td>
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
                        {menu}
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
                        <td className="total-gram">{addCalories(wednesday)}</td>
                    </tr>
                </tbody>
            </table>
        </td>
        </>
    );

}

export default Wednesday;
