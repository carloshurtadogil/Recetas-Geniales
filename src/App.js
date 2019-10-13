import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import NavbarComponent from './components/layout/NavbarComponent';
import CreateRecipe from './components/recipes/CreateRecipe';
import RecipeDetails from './components/recipes/RecipeDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarComponent />
          
          <Switch>
            <Route exact path='/' component={ Dashboard } />
            <Route path='/recipe/:id' component={ RecipeDetails } />
            <Route path='/signin' component={ SignIn } />
            <Route path='/signup' component={ SignUp } />
            <Route path='/create' component={ CreateRecipe } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
