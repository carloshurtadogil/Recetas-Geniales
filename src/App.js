import React, { useState, useEffect } from 'react';
import { 
    Content, 
    Drawer,
    Header, 
    Layout, 
    Navigation
} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './main';
import profile from './assets/logos/crop.png';
import './App.css';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height
    };
};

function App() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const icon = (
        <span>
            <Link to='/' style={{ color: 'white', textDecoration: 'none', alignSelf: 'auto'  }}>
                {
                <span>
                    <img 
                        src={profile} 
                        alt='Carloss Initial'
                  
                        style={{height: '50px'}}
                    />
                </span>
                }
            </Link>
        </span>
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="landing-content">
            <Layout>
                <Header className='header-color' title={icon}  scroll waterfall  >
                    <Navigation>
                        <Link to='/resume'>Resume</Link>
                        
                        <Link to='/contact'>Contact</Link>
                    </Navigation>
                </Header>

                {  windowDimensions.width < 760 
                    ?
                        <Drawer title="Carlos Hurtado" >
                            <Navigation>
                                <Link to='/resume'>Resume</Link>
                                
                                <Link to='/contact'>Contact</Link>
                            </Navigation>
                        </Drawer>
                    : null
                }

                <Content >
                    <div className="page-content" />
                    
                    <Main />
                </Content>       
            </Layout>
        </div>
    );
}

export default App;

/**
<Link to='/resume'>Resume</Link>

                        <Link to='/about'>About Me</Link>
                        
                        <Link to='/projects'>Projects</Link>
                        
                        <Link to='/contact'>Contact</Link>
 */