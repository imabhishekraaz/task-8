import React, { useState } from 'react'
import './Navbar.css'
import { IonIcon } from '@ionic/react'
import { closeOutline, menuOutline, moonOutline, searchOutline, sunnyOutline, toggle, toggleOutline, toggleSharp } from 'ionicons/icons'

const Navbar = () => {
    const [active, setActive] = useState(true);
    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
    }

    const handleButton = () => {
        setActive(!active);
    }
    return (

        <>
            {!active && (
                <div className='main-container'>
                    <div className='main-wrapper'>
                        <div className='icon'>
                            <IonIcon onClick={handleButton} className='icon' icon={menuOutline} />
                        </div>
                        <div className='page-name'>
                            <h2>Dashboard</h2>
                        </div>
                        <div className='iconsn'>
                            <IonIcon className='icon icon-4' icon={searchOutline} />
                        </div>
                    </div>
                </div>
            )}
            {active && (
                <div className='hamburger-btn'>
                    <div className='inner-container'>
                        <div className='details-container'>
                            <div className='user-details'>
                                <div>
                                    <h1 >Abhishek Raj</h1>
                                </div>
                                <div>
                                    <p>abc@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <IonIcon className='icon-8' onClick={handleButton} icon={closeOutline} />
                            </div>
                        </div>
                        
                        <div>
                            <div className='pages-name'>
                                <ul>
                                    <li>Dashboard</li>
                                    <li>Profile</li>
                                    <li>History</li>
                                </ul>
                            </div>
                        </div>
                        <div className='logout'>
                            <div>
                                <p>Log out</p>
                            </div>
                            <div>
                                <IonIcon className='icon-9' onClick={handleTheme} icon={theme ? moonOutline : sunnyOutline} />
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar