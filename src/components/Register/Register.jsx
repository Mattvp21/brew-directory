import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Register = ({onRouteChange, loadUser}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [subMessage, setSubMessage] = useState('')

    const onNameChange = (event) => {
        setName(event.target.value)
    }
    
    const onEmailChange = (event) => {
        
        setEmail(event.target.value)
    }
    
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    
    const onSubmitSignIn = () => {
        if(!email.includes('@')) {
                    setSubMessage('Please include a @')
                } else if(password.length < 6) {
                    setSubMessage('Your password is too short')
                } 
                else if(!password.match(/[$@#&!]+/) || !password.match(/[0-9]+/)) {
                    setSubMessage('Your password must have at least 1 number and special character')
                } else if(name === '') {
                    setSubMessage('Please include a name')
                } else {
            //     fetch("http://localhost:5000/register", {
            //         method: 'post',
            //         headers: {'Content-Type': "application/json"},
            //         body: JSON.stringify({
            //             email: email,
            //             password: password,
            //             name: name
            //         })
            //     })
            //   .then(response => response.json())
            //   .then(data => {
            //       console.log(data)
            //      if(data) {
            //         loadUser(data)
                    onRouteChange('home')
            //      }
            //   })
                    
                }
       
        
    }
    return (
        <article className="br3 ba bg-orange b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id='sign-in' className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0 center">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5 " 
                                   htmlFor='name'>Name</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="text"
                            name='name'
                            id='name'
                            onChange={onNameChange}
                            />
                        </div>
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
                        <p className='dark-red'>{subMessage}</p>
                    </fieldset>
                    
                    <div>
                    <Link to='/'>
                    <p onClick={onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Register</p>  
                    </Link>
                          
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Register 

  // if(!email.includes('@')) {
            //         setSubMessage('Please include a @')
            //     } else if(password.length < 6) {
            //         setSubMessage('Your password is too short')
            //     } 
            //     else if(!password.match(/[$@#&!]+/) || !password.match(/[0-9]+/)) {
            //         setSubMessage('Your password must have at least 1 number and special character')
            //     } else if(name === '') {
            //         setSubMessage('Please include a name')
            //     } else {
            //         onRouteChange('home')
            //     }