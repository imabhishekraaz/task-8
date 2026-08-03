import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { IonIcon } from '@ionic/react'
import { closeOutline, menuOutline, moonOutline, searchOutline, sunnyOutline, toggle, toggleOutline, toggleSharp } from 'ionicons/icons'
import { Link, useNavigate } from 'react-router-dom'
import { handleLogoutButton } from '../../api/api'

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [theme, setTheme] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate()

    const handleLogout = ()=> {
        handleLogoutButton(navigate)
    }

    const handleTheme = () => {
        setTheme(!theme);
    }

    const handleButton = () => {
        setActive(!active);
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setName(user.name);
        setEmail(user.email)
    },[])
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
                                    <h1 >{name}</h1>
                                </div>
                                <div>
                                    <p>{email}</p>
                                </div>
                            </div>
                            <div>
                                <IonIcon className='icon-8' onClick={handleButton} icon={closeOutline} />
                            </div>
                        </div>

                        <div>
                            <div className='pages-name'>
                                <ul>
                                    <li><Link className='Link' to='/'>Dashboard</Link></li>
                                    <li><Link className='Link' to='/profile'>Profile</Link></li>
                                    <li><Link className='Link' to='/all-tasks'>History</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='logout'>
                            <div>
                                <p onClick={handleLogout}>Log out</p>
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