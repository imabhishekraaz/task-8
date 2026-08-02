import React from 'react'
import './TaskDetails.css'
import { Link } from 'react-router-dom'

const TaskDetails = () => {
    return (
        <>
            <div className='task-wrapper'>
                <div className='today'>
                    <div>
                        <p>Today</p>
                    </div>
                    <div>
                        <Link  to='/all-tasks' className='view-all'>View All</Link>
                    </div>
                </div>
                <div className='tasks'>
                    <div className='task-span'>
                        <input type="radio" />
                        <label>Lorem ipsum dolor sit amet.</label>
                    </div>
                    <div className='task-span'>
                        <input type="radio" />
                        <label>Lorem ipsum dolor sit amet.</label>
                    </div>
                    <div className='task-span'>
                        <input type="radio" />
                        <label>Lorem ipsum dolor sit amet.</label>
                    </div>
                    <div className='task-span'>
                        <input type="radio" />
                        <label>Lorem ipsum dolor sit amet.</label>
                    </div>
                    <div className='task-span'>
                        <input type="radio" />
                        <label>Lorem ipsum dolor sit amet.</label>
                    </div>
                    <div className='task-span'>
                        <input type="radio" />
                        <label>Lorem ipsum dolor sit amet.</label>
                    </div>
                    <div className='task-span'>
                        <input type="radio" />
                        <label>Lorem ipsum dolor sit amet.</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskDetails