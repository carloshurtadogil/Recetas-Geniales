import React from 'react';
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


function App() {
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

    return (
        <div className="landing-content">
            <Layout>
                <Header className='header-color' title={icon}  scroll waterfall  >
                    <Navigation>
                        <Link to='/resume'>Resume</Link>
                        
                        <Link to='/contact'>Contact</Link>
                    </Navigation>
                </Header>

                {  
                    <Drawer title="Carlos Hurtado" >
                        <Navigation>
                            <Link to='/resume'>Resume</Link>
                            
                            <Link to='/contact'>Contact</Link>
                        </Navigation>
                    </Drawer>
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