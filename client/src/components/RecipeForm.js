import {useState} from 'react';
import './RecipeForm.css';
import './Recipes.css';

const RecipeForm = ({createRecipe}) => {

    const [name, setName] = useState("");
    const [portion, setPortion] = useState(1);
    const [type, setType] = useState("");
    const [protein, setProtein] = useState(0);
    const [carbohydrate, setCarbohydrate] = useState(0);
    const [fat, setFat] = useState(0);
    const [calories, setCalories] = useState(0);

    const handleNameChange = event => setName(event.target.value);
    const handlePortionChange = event => setPortion(event.target.value);
    const handleTypeChange = event => setType(event.target.value);
    const handleProteinChange = event => setProtein(event.target.value);
    const handleCarbohydrateChange = event => setCarbohydrate(event.target.value);
    const handleFatChange = event => setFat(event.target.value);
    const handleCaloriesChange = event => setCalories(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        const recipe = {
            name,
            portion,
            type,
            protein,
            carbohydrate,
            fat,
            calories
        }
        createRecipe(recipe);
        setName("");
        setPortion();
        setType("");
        setProtein();
        setCarbohydrate();
        setFat();
        setCalories();
        window.location.href = '/recipes';
    };

    return(
        <div className="recipe-form">
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td className="type" colSpan={4}>
                                <select name="type" id="type" value={type} onChange={handleTypeChange} required>
                                    <option disabled>Select a type of meal</option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Dinner">Dinner</option>
                                    <option value="Fish">Fish</option>
                                    <option value="Meat">Meat</option>
                                    <option value="Vegetables">Vegetables</option>
                                    <option value="Dessert">Dessert</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="title-form" colSpan={4}>
                                <label htmlFor="name" className="name-form">Name</label><br/>
                                <input type="text" id="name" value={name} onChange={handleNameChange} required/>
                            </td>
                        </tr>
                        <tr>
                            <td className="nutrition-form">Protein</td>
                            <td className="nutrition-form">Carbs</td>
                            <td className="nutrition-form">Fat</td>
                            <td className="nutrition-form">Calories</td>
                        </tr>
                        <tr>
                            <td className="grams-form">
                                <input type="number" step="any" id="protein" value={protein} onChange={handleProteinChange} required/>
                            </td>
                            <td className="grams-form">
                                <input type="number" step="any" id="carbohydrate" value={carbohydrate} onChange={handleCarbohydrateChange} required/>
                            </td>
                            <td className="grams-form">
                                <input type="number" step="any" id="fat" value={fat} onChange={handleFatChange} required/>
                            </td>
                            <td className="grams-form">
                                <input type="number" step="any" id="calories" value={calories} onChange={handleCaloriesChange} required/>
                            </td>
                        </tr>
                        <tr>
                            <td className="portions-form" colSpan={4}>
                                <label htmlFor="type">Portion:</label>
                                <input type="number" step="any" id="portion" value={portion} onChange={handlePortionChange} required/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4}>
                                <input className="recipes-button-form" type="submit" name="submit" value="Add Recipe"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );

};

export default RecipeForm;