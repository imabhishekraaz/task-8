import React, { useEffect, useState } from 'react'
import './EditTask.css'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline, createOutline } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getUserTaskDetails } from '../../api/api'
import useDocumentTitle from '../../Hooks/useDocumentTitle'

const EditTask = () => {
  const { id } = useParams()
  const [task, setTask] = useState();

  const handleUserTaskDetails = async () => {
    const response = await getUserTaskDetails(id)
    if (response.data.success) {
      setTask(response.data.isTaskFound)
    }
  }
  useDocumentTitle('Edit Task')
  
  useEffect(() => {
    handleUserTaskDetails()
  }, [])

  return (
    <>
      <div>
        <div>
          <div className='task-name'>
            <div>
              <Link to='/'><IonIcon className='icon-9' icon={arrowBackOutline} /></Link>
            </div>
            <div>
              <h1>Title Name</h1>
            </div>
          </div>
          <div>
            <div className='task-details'>
              <div className='title'>
                <div className='inner'>
                  <div className='title-2'>
                    <p>Title</p>
                    <IonIcon className='icon-6' icon={createOutline} />
                  </div>
                  <p><b className='data'>{task?.title}</b></p>
                </div>
              </div>
              <div className='title'>
                <div className='inner'>
                  <div className='title-2'>
                    <p>Description</p>
                    <IonIcon className='icon-6' icon={createOutline} />
                  </div>
                  <p className='data decription'>{task?.description}</p>
                </div>
              </div>
              <div className='status-wrapper'>
                <div className='title'>
                  <p>Date</p>
                  <p>
                    {new Date(task?.createdAt).toLocaleDateString("en-GB")}
                  </p>
                </div>
                <div className='title options'>
                  <label htmlFor="status">Status</label>
                  <select id='status' value={task?.status}>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="canceled">Cancelled</option>
                  </select>
                </div>
              </div>
              <div className='save-btn'>
                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditTask