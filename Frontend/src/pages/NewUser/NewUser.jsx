import React from 'react'
import manImage from './../../assets/images/Work-illustration.svg'
import './NewUser.css'

const NewUser = () => {
  return (
    <>
        <div className='main-container'>
            <div className='main-wrapper'>
                <div className='img-wrapper'>
                    <img src={manImage} alt="man-image" width={300} height={300} />
                </div>
                <div>
                    <div>
                        <div className='heading-wrapper'>
                            <h1>Stay Organized, Stay Ahead</h1>
                        </div>
                        <div className='heading-wrapper paragraph'>
                            <p>Organize, track, and complete your tasks effortlessly.</p>
                        </div>
                    </div>
                    <div className='button-wrapper'>
                        <div className='main-button-wrapper'>
                            <button>Login</button>
                            <button>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewUser