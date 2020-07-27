import  React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from '../assets/logos/crop.png';

const ProfileNav = () => {
  return (
    <Navbar expand="lg" className='header-color' variant='dark' sticky='top'>
      <Navbar.Brand>
        <Link to='/' style={{ color: 'white', textDecoration: 'none', alignSelf: 'auto'  }}>
          {
            <span>
              <img 
                src={profile} 
                alt='Carlos Initial' 
                style={{height: '50px'}}
              />
            </span>
          }
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse style={{ color: 'white' }}>
        <Nav className="mr-auto flex-end">
          <Nav.Link href='/' className='nav-link'>
            Home
          </Nav.Link>

          <Nav.Link href='/resume' className='nav-link'>
            Resume
          </Nav.Link>

          <Nav.Link href='/projects' className='nav-link'>
            Projects
          </Nav.Link>

          <Nav.Link href='/contact' className='nav-link'>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ProfileNav;