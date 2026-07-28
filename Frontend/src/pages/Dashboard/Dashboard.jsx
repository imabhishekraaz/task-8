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
        <div>
          <div>
            <div>
              <h1>Good Morning, Abhishek Raj</h1>
            </div>
            <div>
              {dayName} {dateNum} {month}
            </div>
          </div>
          <div>
            <div>
              <p>To Do</p>
            </div>
            <div>
              <div>
                <div>
                  <IonIcon icon={bagHandleOutline} />
                </div>
                <p>Work</p>
                <p>15 Aug (10:10 AM)</p>
                <div>
                  <p>0/8</p>
                  <IonIcon icon={ellipseOutline} />
                </div>
              </div>
              <div>
                <div>
                  <IonIcon icon={personOutline} />
                </div>
                <p>Personal</p>
                <p>15 Aug (10:10 AM)</p>
                <div>
                  <p>0/8</p>
                  <IonIcon icon={ellipseOutline} />
                </div>
              </div>
              <div>
                <div>
                  <IonIcon icon={peopleOutline} />
                </div>
                <p>Family</p>
                <p>15 Aug (10:10 AM)</p>
                <div>
                  <p>0/8</p>
                  <IonIcon icon={ellipseOutline} />
                </div>
              </div>
              <div>
                <div>
                  <IonIcon icon={barbellOutline} />
                </div>
                <p>Sport</p>
                <p>15 Aug (10:10 AM)</p>
                <div>
                  <p>0/8</p>
                  <IonIcon icon={ellipseOutline} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>Today</p>
            </div>
            <div>
              <div>
                <input type="radio"/>
                <label>task 1</label>
              </div>
              <div>
                <input type="radio"/>
                <label>task 1</label>
              </div>
              <div>
                <input type="radio"/>
                <label>task 1</label>
              </div>
              <div>
                <input type="radio"/>
                <label>task 1</label>
              </div>
              <div>
                <input type="radio"/>
                <label>task 1</label>
              </div>
              <div>
                <input type="radio"/>
                <label>task 1</label>
              </div>
              <div>
                <input type="radio"/>
                <label>task 1</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard