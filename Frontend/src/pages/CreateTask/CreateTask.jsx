import { IonIcon } from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'
import React from 'react'
import './CreateTask.css'
import { Link } from 'react-router-dom'

const CreateTask = () => {
    return (
        <>
            <div>
                <div className='wrapper'>
                    <div className='page-name'>
                        <div>
                           <Link to='/'>  <IonIcon className='icon-9' icon={arrowBackOutline}/> </Link>
                        </div>
                        <div>
                            <h1>Add Task</h1>
                        </div>
                    </div>
                    <div>
                        <div className='form-container'>
                            <form method="post">
                                <div>
                                    <label htmlFor="title">Task Name</label>
                                    <input type="text" name="title" id="title" />
                                </div>
                                <div>
                                    <label htmlFor="desc">Description</label>
                                    <textarea name="desc" id="desc"></textarea>
                                </div>
                                <div className='save-btn'>
                                    <button>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTask