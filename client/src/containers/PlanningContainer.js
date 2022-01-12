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

    return(
        <div className="main">
            <h1>Your Planning</h1>
            <div className="line"></div>
                <Planning recipesList={recipesList}/>
        </div>
    );

}

export default PlanningContainer;
