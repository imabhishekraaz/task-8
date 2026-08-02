import React from 'react'
import './NotFound.css'
import useDocumentTitle from '../../Hooks/useDocumentTitle'

const NotFound = () => {

    useDocumentTitle('Not Found')
  return (
    
    <> 
        <div className='container'>
            <div className='wrapper1'>
                <div>
                    <h1>404 Page Not Found</h1>
                </div>
                <div>
                    <button>Go to Homepage</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default NotFound