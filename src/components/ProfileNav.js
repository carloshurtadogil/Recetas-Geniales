import  React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from '../assets/logos/crop.png';

class ProfileNav extends Component {
    render() {
        return (
            <Navbar expand="md" className='header-color' variant='dark' sticky='top'>
                <Navbar.Brand>
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
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse style={{ color: 'white' }}>
                    <Nav className="mr-auto flex-end">
                        <Nav.Link>
                            <Link to='/' className='nav-link'>Home</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to='/resume' className='nav-link'>Resume</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to='/projects' className='nav-link'>Projects</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to='/contact' className='nav-link'>Contact</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default ProfileNav;