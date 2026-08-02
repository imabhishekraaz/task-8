import React from 'react'
import './EditTask.css'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline, createOutline } from 'ionicons/icons'

const EditTask = () => {
  return (
    <>
      <div>
        <div>
          <div className='task-name'>
            <div>
              <IonIcon className='icon-9' icon={arrowBackOutline} />
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
                  <p><b className='data'>Lorem ipsum dolor sit amet.</b></p>
                </div>
              </div>
              <div className='title'>
                <div className='inner'>
                  <div className='title-2'>
                    <p>Description</p>
                    <IonIcon className='icon-6' icon={createOutline} />
                  </div>
                  <p className='data decription' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui magni tempore animi odio ut quisquam aut illo assumenda obcaecati reiciendis beatae iure esse, itaque eveniet, blanditiis laboriosam cum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi recusandae, repudiandae molestiae, tenetur provident temporibus, vel est ducimus ex vitae exercitationem. Cumque velit natus ab voluptatum totam sunt officiis, aliquid laborum eos vel libero itaque, reiciendis iusto modi, quam voluptas est. Voluptate libero numquam facilis? A, saepe ea. Dolore sed dolor libero, aperiam facilis optio. Corrupti accusamus fugit velit non error repellendus facilis, aspernatur voluptatem repellat, numquam perferendis vitae consectetur quod cupiditate et reiciendis ipsam libero dolorem. Ab repellat delectus voluptatibus ullam consectetur, error quis est neque, aliquam maiores nostrum non eum reiciendis sequi eligendi consequuntur nam mollitia nulla ipsam.</p>
                </div>
              </div>
              <div className='status'>
                <div className='title'>
                  <p>Date</p>
                  <p>{Date.now()}</p>
                </div>
                <div className='title options'>
                  <label htmlFor="status">Status</label>
                  <select id='status'>
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