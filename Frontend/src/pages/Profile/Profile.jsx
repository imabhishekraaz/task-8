import { IonIcon } from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'
import React from 'react'
import userImage from './../../../public/images.jfif'
import './Profile.css'
import { useNavigate } from 'react-router-dom'
import { handleLogoutButton } from '../../api/api'
import useDocumentTitle from '../../Hooks/useDocumentTitle'

const Profile = () => {
    const naviagte = useNavigate();

    const handleLogout = ()=> {
        handleLogoutButton(naviagte);
    }

    useDocumentTitle('Profile')
    
    return (
        <>
            <div>
                <div>
                    <div className='title-name'>
                        <div>
                            <IonIcon className='icon-9' icon={arrowBackOutline} />
                        </div>
                        <div>
                            <h1>Profile</h1>
                        </div>
                    </div>
                    <div>
                        <div className='wrapper profile-wrapper'>
                            <div className='option'>
                                <div>
                                    <img src={userImage} alt="userImage" />
                                </div>
                                <div>
                                    <p>Abhishek Raj</p>
                                    <p>abcdef@gmail.com</p>
                                </div>
                            </div>
                            <div className='span'>
                                <p>Change Password</p>
                            </div>
                            <div className='span'>
                                <p>Settings</p>
                            </div>
                            <div onClick={handleLogout} className='span'>
                                <p  className='logout-btn'>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile