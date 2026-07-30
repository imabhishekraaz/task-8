import React from 'react'
import './Dashboard.css'
import { IonIcon } from '@ionic/react';
import { atCircleOutline, bagHandleOutline, barbellOutline, ellipseOutline, peopleOutline, personCircle, personOutline, squareOutline } from 'ionicons/icons';

const Dashboard = () => {

  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const dayName = today.toLocaleString('default', { weekday: 'short' });
  const dateNum = today.getDate();

  return (
    <>
      <div>
        <div className='page-wrapper'>
          <div className='greet-wrapper'>
            <div className='username-wrapper'>
              <h1>Good Morning, Abhishek Raj</h1>
            </div>
            <div className='date'>
              <p>{dayName} {dateNum} {month}</p>
            </div>
          </div>
          <div className='category-wrapper'>
            <div className='todo'>
              <p>To Do</p>
            </div>
            <div className='category-inner-wrapper'>
              <div className='span'>
                <div className='icon-wrapper'>
                  <IonIcon className='icon' icon={bagHandleOutline} />
                </div>
                <p>Work</p>
                <p className='time'>15 Aug (10:10 AM)</p>
                <div className='total-task'>
                  <p>0/8</p>
                  <IonIcon className='icon' icon={ellipseOutline} />
                </div>
              </div>
              <div className='span'>
                <div className='icon-wrapper'>
                  <IonIcon className='icon' icon={personOutline} />
                </div>
                <p>Personal</p>
                <p className='time'>15 Aug (10:10 AM)</p>
                <div className='total-task'>
                  <p>0/8</p>
                  <IonIcon className='icon' icon={ellipseOutline} />
                </div>
              </div>
              <div className='span'>
                <div className='icon-wrapper' >
                  <IonIcon className='icon' icon={peopleOutline} />
                </div>
                <p>Family</p>
                <p className='time'>15 Aug (10:10 AM)</p>
                <div className='total-task'>
                  <p>0/8</p>
                  <IonIcon className='icon' icon={ellipseOutline} />
                </div>
              </div>
              <div className='span'>
                <div className='icon-wrapper'>
                  <IonIcon className='icon' icon={barbellOutline} />
                </div>
                <p>Sport</p>
                <p className='time'>15 Aug (10:10 AM)</p>
                <div className='total-task'>
                  <p>0/8</p>
                  <IonIcon  className='icon' icon={ellipseOutline} />
                </div>
              </div>
            </div>
          </div>
          <div className='task-wrapper'>
            <div className='today'>
              <p>Today</p>
            </div>
            <div className='tasks'>
              <div className='task-span'>
                <input type="radio"/>
                <label>Lorem ipsum dolor sit amet.</label>
              </div>
              <div className='task-span'>
                <input type="radio"/>
                <label>Lorem ipsum dolor sit amet.</label>
              </div>
              <div className='task-span'>
                <input type="radio"/>
                <label>Lorem ipsum dolor sit amet.</label>
              </div>
              <div className='task-span'>
                <input type="radio"/>
                <label>Lorem ipsum dolor sit amet.</label>
              </div>
              <div className='task-span'>
                <input type="radio"/>
                <label>Lorem ipsum dolor sit amet.</label>
              </div>
              <div className='task-span'>
                <input type="radio"/>
                <label>Lorem ipsum dolor sit amet.</label>
              </div>
              <div className='task-span'>
                <input type="radio"/>
                <label>Lorem ipsum dolor sit amet.</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard