import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SignedOutLinks = () => {
    return (
        <Navbar.Collapse className='justify-content-end'>
            <Nav className="mr-auto">
                <Nav.Link href='/signup'>Sign Up</Nav.Link>

                <Nav.Link href='/signin'>Sign In</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    );
};

export default SignedOutLinks;