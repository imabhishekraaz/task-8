import React, { useEffect, useState } from 'react'
import './TaskDetails.css'
import { Link } from 'react-router-dom'
import { getUserTasks } from '../../api/api';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

const TaskDetails = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [tasks, setTasks] = useState([]);

    const handleUserTasks = async () => {
        const response = await getUserTasks();
        if (response.data.success) {
            setTasks(response.data.userTasks)
            setIsLoading(false)
        }
    }

    useDocumentTitle('Task details')
    useEffect(() => {
        handleUserTasks()
    }, [])

    return (
        <>
            <div className='task-wrapper'>
                <div className='today'>
                    <div>
                        <p>Today</p>
                    </div>
                    <div>
                        <Link to='/all-tasks' className='view-all'>View All</Link>
                    </div>
                </div>
                <div className='tasks'>
                    {isLoading ? (
                        <div className='fetch'>
                            <p>Fetching Tasks...</p>
                        </div>
                    ) :
                        tasks ? (
                            tasks.map((task) => (
                                <div className='task-span' key={task._id}>
                                    <input type="radio" />
                                    <label><Link className='link' to={`/edit-task/${task._id}`}>{task.title}</Link></label>
                                </div>
                            ))
                        )
                            : (
                                <div className='fetch'>
                                    <p>No Task Available</p>
                                </div>
                            )
                    }


                </div>
            </div>
        </>
    )
}

export default TaskDetails