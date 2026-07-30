import React from 'react'
import './Login.css';
import { IonIcon } from '@ionic/react'

import { logoApple, logoFacebook, logoGoogle } from 'ionicons/icons';

const Login = () => {
    return (
        <>
            <div className='page-container'>
                <div className='mains-wrapper'>
                    <div className='header-wrapper'>
                        <div className='heading-container'>
                            <h1>Login here</h1>
                        </div>
                        <div className='paragraph-container'>
                            <p>Welcome back you've been missed!</p>
                        </div>
                    </div>
                    <div >
                        <form className='form-container'>
                            <div className='input-container'>
                                <input type="email" placeholder='Email' required />
                                <input type="password" name="password" id="password" placeholder='Password' required />
                            </div>
                            <div className='signin'>
                                <a href="#">Forgot your password?</a>

                                <button type="submit">Signin</button>
                            </div>
                        </form>

                        <div className='new-account'>
                            <p>Create new account</p>
                        </div>
                    </div>
                    <div className='other-option'>
                        <div className='paragraph'>
                            <p>Or continue with</p>
                        </div>
                        <div className='icons'>
                            <IonIcon className='icon' icon={logoGoogle} />
                            <IonIcon className='icon' icon={logoFacebook} />
                            <IonIcon className='icon' icon={logoApple} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
