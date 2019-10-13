import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SignedInLinks = () => {
    return (
        <Navbar.Collapse className='justify-content-end'>
            <Nav className="mr-auto">
                <Nav.Link href='/'>Hear No Corgi</Nav.Link>

                <Nav.Link href='/'>See No Corgi</Nav.Link>

                <Nav.Link to='/' className='btn btn-default btn-circle'>CH</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    );
};

export default SignedInLinks;