import React, { useState } from 'react';

const Signin = ({onRouteChange}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitSignIn = () => {
        onRouteChange('home')
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
                        <input 
                        onClick={onSubmitSignIn} 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        defaultValue='Sign In' />    
                    </div>
                    <div>
                        <p onClick={() => onRouteChange('Register')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Register</p>    
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Signin 