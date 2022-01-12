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

    const handleClick = function(){
        onClick();
    };
    
    const onClick = function(){
        const breakfast = findTypicalBreakfast(updatedRecipes);
        const dinnerRecipes = matchDinnerWithTypicalBreakfast(updatedRecipes);
        const dinner = new Array(dinnerRecipes[Math.floor(Math.random() * dinnerRecipes.length)]);
        const mondayMenu = [...breakfast, ...dinner];
        setMonday(mondayMenu);
    }

    const findRecipesByType = function(recipes, meal){
        const recipesByType = recipes.filter(recipe => recipe.type === meal);
        return recipesByType;
    }

    const findTypicalBreakfast = function(recipes){
        const breakfastRecipes = findRecipesByType(recipes, "Breakfast");
        const typicalBreakfast = breakfastRecipes.filter(recipe => recipe.name === "Sausage And Egg Salad");
        return typicalBreakfast;
    }

    const matchDinnerWithTypicalBreakfast = function(recipes){
        const dinnerRecipes = findRecipesByType(recipes, "Dinner");
        let possibleDinner = dinnerRecipes
        dinnerRecipes.filter(function(recipe){
            const index = dinnerRecipes.indexOf(recipe);
            if(recipe.protein > 68.8){
                dinnerRecipes.splice(index, 1);
            }
            else if(recipe.carbohydrate > 20.1){
                dinnerRecipes.splice(index, 1);
            }
            else if(recipe.fat > 70.9){
                dinnerRecipes.splice(index, 1);
            }
            return possibleDinner;
        })
        return possibleDinner;
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
        <button onClick={() => {handleClick()}} type="button">Plan your week</button>
        <div className="planning-container">
            <div className='planning'>
                <table className='table-week'>
                    <tbody>
                        <tr>
                            <th className='day' colSpan={6}>Monday</th>
                        </tr>
                            <Monday monday={monday}/>
                    </tbody>
                </table>
            </div>
            <div className='planning'>
                <table className='table-week'>
                    <tbody>
                        <tr>
                            <th className='day' colSpan={6}>Tuesday</th>
                        </tr>
                            <Monday monday={monday}/>
                    </tbody>
                </table>
            </div>
            <div className='planning'>
                <table className='table-week'>
                    <tbody>
                        <tr>
                            <th className='day' colSpan={6}>Wednesday</th>
                        </tr>
                            <Monday monday={monday}/>
                    </tbody>
                </table>
            </div>
            <div className='planning'>
                <table className='table-week'>
                    <tbody>
                        <tr>
                            <th className='day' colSpan={6}>Thursday</th>
                        </tr>
                            <Monday monday={monday}/>
                    </tbody>
                </table>
            </div>
            <div className='planning'>
                <table className='table-week'>
                    <tbody>
                        <tr>
                            <th className='day' colSpan={6}>Friday</th>
                        </tr>
                            <Monday monday={monday}/>
                    </tbody>
                </table>
            </div>
            <div className='planning'>
                <table className='table-week'>
                    <tbody>
                        <tr>
                            <th className='day' colSpan={6}>Saturday</th>
                        </tr>
                            <Monday monday={monday}/>
                    </tbody>
                </table>
            </div>
            <div className='planning'>
                <table className='table-week'>
                    <tbody>
                        <tr>
                            <th className='day' colSpan={6}>Sunday</th>
                        </tr>
                            <Monday monday={monday}/>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )

}

export default Planning;
