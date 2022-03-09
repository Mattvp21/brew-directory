import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Signin = ({onRouteChange, loadUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitSignIn = () => {
    //     fetch("http://localhost:5000/signin", {
    //         method: 'post',
    //         headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //     email: email,
    //     password: password
    //   })
    //     }).then(response => response.json())
    //     .then(user => {
    //         console.log(user)
    //         if(user.id){
    //             loadUser(user)
                onRouteChange('home')
            // }
       
        // })
        
    }
    return (
        <article className="br3 ba bg-orange b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id='sign-in' className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5 " 
                                   htmlFor='email-address'>Email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="email"
                            name='email-address'
                            id='email-address'
                            onChange={onEmailChange}
                            />
                        </div>
                        <div className='mv3'>
                            <label className="db fw6 lh-copy f5" 
                            htmlFor='password'>Password</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="password"
                            name='password'
                            id='password'
                            onChange={onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div>
                    <Link to='/'>
                    <input 
                        onClick={onSubmitSignIn} 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        defaultValue='Sign In' />   
                    </Link>
                    </div>
                    <div>
                    <Link to='/register'>
                    <p onClick={() => onRouteChange('Register')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Register</p>  
                    </Link>
                          
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Signin 