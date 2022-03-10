import React from 'react';
import 'animate.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
    <nav className='flex justify-end '>
        <Link to='/'>
            <p style={{textDecoration: 'none'}}  className='animate__animated animate__slideInRight f3 link dim black pa3 pointer'>Home</p>
        </Link>
    </nav>
   )
}

export default Navbar