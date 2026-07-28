import React from 'react'
import './Register.css'
import { IonIcon } from '@ionic/react'

import { logoApple, logoFacebook, logoGoogle } from 'ionicons/icons';


const Register = () => {
  return (
    <>
      <div className='main-wrapper'>
        <div>
          <div className='header-wrapper'>
            <div className='create-account'>
              <h1>Create Account</h1>
            </div>
            <div className='header-paragraph'>
              <p>Create an account so you can explore all features</p>
            </div>
          </div>
          <div>
            <form>
              <div className='form-wrapper'>
                <div className='form-inner-wrapper'>
                  <input type="text" placeholder='Name' />
                  <div className='option-wrapper'>
                    <select id="gender" name="gender">
                      <option value="" disabled selected>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className='email-wrapper'>
                  <input type="email" name="email" id="email" placeholder='Email' />
                  <input type="password" name="password" id="password" placeholder='Password' />
                </div>
                <div className='signup-button'>
                  <button>Sign up</button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div className='account-button'>
              <p>Already have an account?</p>
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
      </div>
    </>
  )
}

export default Register