import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from  './components/Home';
import NavBar from './components/NavBar';
import RecipesContainer from './containers/RecipesContainer';
import ErrorPage from './components/ErrorPage';

const App = ()=> {

  return (
    <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>     
          <Route path="/recipes" render={() => <RecipesContainer/>}/>
          <Route component={ErrorPage}/>
        </Switch>
    </Router>
  );

};

export default App;