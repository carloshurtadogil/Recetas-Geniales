import React from 'react';
import Main from './main';
import ProfileNav from './components/ProfileNav';
import './App.css';


function App() {
    return (
        <div className="landing-content">
            <ProfileNav />

            <div className="page-content">
                <Main />
            </div>
        </div>
    );
}

export default App;