import { IonIcon } from '@ionic/react'
import { addOutline, closeOutline, documentTextOutline, layers } from "ionicons/icons";
import React from 'react'
import './FloatingMenu.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FloatingMenu = () => {

    const [active, isActive] = useState(false);

    const handleMenu = () => {
        isActive(!active)
    }
    
    return (
        <>
            <div>
                <div onClick={handleMenu} className='menu-wrapper'>
                    <IonIcon className='icon-2' icon={active ? closeOutline : layers} />
                </div>

                {/* pop button  */}
                { active && (
                    <div>
                        <div className='pop-button'>
                            <Link to='/all-tasks'> <IonIcon className='icon-3' icon={documentTextOutline}/> </Link>
                            <Link to='/add-task'> <IonIcon className='icon-3' icon={addOutline}/> </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default FloatingMenu