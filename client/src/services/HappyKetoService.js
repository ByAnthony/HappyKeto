const baseURL = 'http://localhost:5000/api/recipes/';

const HappyKetoService = {

    getRecipes(){
        return fetch(baseURL)
        .then(res => res.json())
    },

    postRecipe(recipe){
        return fetch(baseURL, {
            method:'POST',
            body:JSON.stringify(recipe),
            headers:{'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    deleteRecipe(id){
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    },

    updateRecipe(recipe, id){
        return fetch(baseURL + id, {
            method:'PUT',
            body:JSON.stringify(recipe),
            headers:{'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    }

};

export default HappyKetoService;
