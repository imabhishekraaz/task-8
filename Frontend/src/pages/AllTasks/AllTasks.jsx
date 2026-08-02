import { IonIcon } from '@ionic/react'
import { arrowBackOutline, trashOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import './AllTasks.css'
import { Link } from 'react-router-dom'
import { getUserTasks } from '../../api/api'
import { deleteUserTask } from '../../api/api'

const AllTasks = () => {

    const [tasks, setTasks] = useState([]);

    const handleUserAllTasks = async () => {
        const response = await getUserTasks()
        if (response.data.success) {
            setTasks(response.data.userTasks)
        }
        console.log(tasks)
    }
    useEffect(() => {
        handleUserAllTasks()
    }, [tasks])

    return (
        <>
            <div>
                <div>
                    <div className='heading'>
                        <div>
                            <Link to='/'><IonIcon className='icon-9' icon={arrowBackOutline} /></Link>
                        </div>
                        <div>
                            <h1 >All Tasks</h1>
                        </div>
                    </div>
                    <div>
                        <div>
                            <table className="table">
                                <thead className="table-head">
                                    <tr className="table-head-row">
                                        <th className="table-heading">No.</th>
                                        <th className="table-heading">Task Name</th>
                                        <th className="table-heading">Status</th>
                                        <th className="table-heading">Action</th>
                                    </tr> 
                                </thead>

                                <tbody className="table-body">
                                    {tasks.map((task,index) => (
                                        <tr className="table-row" key={task._id}>
                                            <td className="table-data table-number">{index+1}</td>
                                            <td className="table-data table-task">{task.title}</td>
                                            <td className="table-data table-status">
                                                <span className="status pending">{task.status ? 'Completed' : 'Pending'}</span>
                                            </td>
                                            <td className="table-data table-action">
                                                <IonIcon className="delete-icon" onClick={()=>deleteUserTask(task._id)} icon={trashOutline} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllTasks