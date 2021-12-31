const express = require('express');
const app = express();

const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const createrRouter = require('./helpers/create_router.js');

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
    .then((client) => {
        const db = client.db('recipe_list');
        const recipesCollection = db.collection('recipes');
        const recipesRouter = createrRouter(recipesCollection);
        app.use('/api/recipes', recipesRouter);
    })
    .catch(console.error);

app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});
