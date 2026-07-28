import React from 'react'
import './Navbar.css'
import { IonIcon } from '@ionic/react'
import { menuOutline, searchOutline } from 'ionicons/icons'

const Navbar = () => {
  return (
    
    <>
        <div className='main-container'>
            <div className='main-wrapper'>
                <div className='icon'>
                    <IonIcon className='icon' icon={menuOutline}/>
                </div>
                <div className='page-name'>
                    <h2>Navbar</h2>
                </div>
                <div className='icon'>
                    <IonIcon className='icon icon-2' icon={searchOutline}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar