import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className='right'>
            <li><NavLink to='/'>Hear No Corgi</NavLink></li>

            <li><NavLink to='/'>See No Corgi</NavLink></li>
            
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>CH</NavLink></li>
        </ul>
    );
};

export default SignedInLinks;