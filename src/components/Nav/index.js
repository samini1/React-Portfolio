import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    
    return (
                    
            <nav>
                <ul className='flex-row mx-4'>
                    <NavLink exact to='/' activeClassName='current' className='mx-3'>
                        <li >About Me</li>
                    </NavLink>
                    <NavLink exact to='/portfolio' activeClassName='current'>
                        <li className='m-2'>Portfolio</li>
                    </NavLink>
                    <NavLink exact to='/contact' activeClassName='current'>
                        <li>Contact</li>
                    </NavLink>
                    <NavLink exact to='/resume' activeClassName='current'>
                        <li>Resume</li>
                    </NavLink>
                </ul>                
            </nav>        
    );
}

export default Nav;