import React from 'react'
import './TaskDetails.css'

const TaskDetails = () => {
    return (
        <>
            <div className='task-wrapper'>
                <div className='today'>
                    <p>Today</p>
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