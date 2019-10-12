import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import RecipeDetails from './components/recipes/RecipeDetails';
import SignIn from './components/auth/SignIn';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          
          <Switch>
            <Route exact path='/' component={ Dashboard } />
            <Route path='/recipe/:id' component={ RecipeDetails } />
            <Route path='/signin' component={ SignIn } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
