import { arrowBackOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import './CreateTask.css'
import { Link } from 'react-router-dom'
import { addUserTask } from '../../api/api'

const CreateTask = () => {
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const taskDetails = {
        title: task.title,
        description: task.description
    }
    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const response = await addUserTask(taskDetails);

            setSuccess(response.data?.message)

        } catch (err) {
            setError("All fields requires!")
        }
    }

    useEffect(() => {

        if (error || success) {
            const timer = setTimeout(() => {
                setError(null);
                setSuccess(null)
            }, 2000)

            return () => clearTimeout(timer)
        }

    }, [error, success])
    return (
        <>
            <div>
                <div className='wrapper'>
                    <div className='page-name'>
                        <div>
                            <Link to='/'>  <IonIcon className='icon-9' icon={arrowBackOutline} /> </Link>
                        </div>
                        <div>
                            <h1>Add Task</h1>
                        </div>
                    </div>
                    <div>
                        <div className='form-container'>
                            <form>
                                <div>
                                    <label htmlFor="title">Task Name</label>
                                    <input type="text" onChange={(e) => setTask({
                                        ...task,
                                        title: e.target.value
                                    })} name="title" id="title" />
                                </div>
                                <div>
                                    <label htmlFor="desc">Description</label>
                                    <textarea name="desc" id="desc" onChange={e => {
                                        setTask({
                                            ...task,
                                            description: e.target.value
                                        })
                                    }}></textarea>
                                </div>
                                {success && (
                                    <p className='message'>{success}</p>
                                )}
                                {error && (
                                    <p className='message-err'>{error}</p>
                                )}
                                <div className='save-btn'>
                                    <button type='button' onClick={handleAddTask}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default CreateTask