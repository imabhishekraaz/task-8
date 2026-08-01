import { IonIcon } from '@ionic/react'
import { addOutline, closeOutline, documentTextOutline, layers } from "ionicons/icons";
import React from 'react'
import './FloatingMenu.css'
import { useState } from 'react';

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
                            <IonIcon className='icon-3' icon={documentTextOutline}/>
                            <IonIcon className='icon-3' icon={addOutline}/>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default FloatingMenu