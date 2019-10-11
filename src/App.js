import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

import './App.css';
import corgi from './assets/images/corgi.png';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="App">
            <h1>My First Website</h1>
    
            <img src={corgi} alt="Corgi"  />

            <p>Just had to celebrate with a corgi</p>
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
