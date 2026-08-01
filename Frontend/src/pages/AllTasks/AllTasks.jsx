import { IonIcon } from '@ionic/react'
import { arrowBackOutline, trashOutline } from 'ionicons/icons'
import React from 'react'
import './AllTasks.css'

const AllTasks = () => {
    return (
        <>
            <div>
                <div>
                    <div className='heading'>
                        <div>
                            <IonIcon className='icon-7' icon={arrowBackOutline} />
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
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>
                                    <tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr><tr className="table-row">
                                        <td className="table-data table-number">1</td>
                                        <td className="table-data table-task">Lorem ipsum dolor sit amet.</td>
                                        <td className="table-data table-status">
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td className="table-data table-action">
                                            <IonIcon className="delete-icon" icon={trashOutline} />
                                        </td>
                                    </tr>

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