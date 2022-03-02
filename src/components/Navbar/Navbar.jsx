import React from 'react';

const Navbar = ({isSignedIn, onRouteChange}) => {
    if(isSignedIn) {
        return (
            <nav className='flex justify-end bg-gold'>
            <p onClick={() => onRouteChange('Signout')}  className='f3 link dim black pa3 pointer'>Signout</p>
        </nav>
           ) 
        
    } else {
        return (
            <nav className='flex justify-end bg-gold'>
                <p onClick={() => onRouteChange('Signin')} className='f3 link dim black pa3 pointer'>Signin</p>
                <p onClick={() => onRouteChange('Register')}  className='f3 link dim black pa3 pointer'>Register</p>
            </nav>
        )
    }
       
    
}

export default Navbar