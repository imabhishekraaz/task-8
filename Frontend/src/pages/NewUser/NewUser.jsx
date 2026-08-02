import React from 'react';
import manImage from './../../assets/images/Work-illustration.svg';
import './NewUser.css';
import useDocumentTitle from '../../Hooks/useDocumentTitle';

const NewUser = () => {

  useDocumentTitle('Welcome to To-Do App')
  return (
    
    <div className="mains-container">
      <div className="mains-wrapper">
        <div className="img-wrapper">
          <img src={manImage} alt="Work illustration" width={300} height={400} />
        </div>
        
        <div className="content-wrapper">
          <div className="heading-wrapper">
            <h1>Stay Organized, Stay Ahead</h1>
            <p className="paragraph">Organize, track, and complete your tasks effortlessly.</p>
          </div>
          
          <div className="button-wrapper">
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-secondary">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;