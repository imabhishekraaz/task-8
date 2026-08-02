import React, { useEffect, useState } from 'react'
import './Register.css'
import { IonIcon } from '@ionic/react'

import { logoApple, logoFacebook, logoGoogle } from 'ionicons/icons';
import { signupUser } from '../../api/api';



const Register = () => {

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  // Error message
  const [error, setError] = useState();
  const [success, setSuccess] = useState();


  const userData = {
    name: name,
    password: password,
    email: email,
    gender: gender,
  };

 
  const handleSignupAPI = async (e) => {

    try {

      e.preventDefault()

      const res = await signupUser(userData);
      // save the user details in the localStorage
      localStorage.setItem('user',JSON.stringify({
        name: res.data?.user?.name,
        email: res.data?.user?.email,
        token: res.data?.token,
      }))

      setSuccess(res.data?.message)

    } catch (err) {
      
      setError(err.response?.data?.message)

      if (err.response) {
        console.error("Backend Error Message:", err.response.data);
        console.error("Status Code:", err.response.status);

      } else if (err.request) {
        console.error("No response received from backend:", err.request);

      } else {
        console.error("Error setting up request:", err.message);
      }
    }
  };

  useEffect(() => {

    if(error  || success ){
      const timer =setTimeout(()=> {
        setError(null);
        setSuccess(null)
      },2000)

      return ()=> clearTimeout(timer)
    }

  },[error, success])

  return (
    <>
      <div className='mains-wrapper'>
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
                  <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name' />
                  <div className='option-wrapper'>
                    <select required value={gender} onChange={(e) => setGender(e.target.value)} id="gender" name="gender">
                      <option value="" disabled selected>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className='email-wrapper'>
                  <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder='Email' />
                  <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder='Password' />
                </div>

                {error && <div className="show-error">{error}</div>}
                {success && <div className="show-success">{success}</div>}

                <div className='signup-button'>
                  <button onClick={handleSignupAPI}>Sign up</button>
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