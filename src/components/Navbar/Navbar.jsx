import React from 'react';
import 'animate.css'
import { Link } from 'react-router-dom';

const Navbar = ({isSignedIn, onRouteChange}) => {
    if(isSignedIn) {
        return (
            <nav className='flex justify-end bg-gold'>
            <Link to='/signin'>
                <p onClick={() => onRouteChange('Signout')}  className='animate__animated animate__slideInRight f3 link dim black pa3 pointer'>Signout</p>
            </Link>
            
        </nav>
           ) 
        
    } else {
        return (
            <nav className='flex justify-end bg-gold'>
            <Link to='/signin'>
                <p onClick={() => onRouteChange('Signin')} className=' f3 link dim black pa3 pointer'>Signin</p>
            </Link>
            <Link to='/register'>
            <p onClick={() => onRouteChange('Register')}  className='f3 link dim black pa3 pointer'>Register</p>
            </Link>   
                
            </nav>
        )
    }
       
    
}

export default Navbar