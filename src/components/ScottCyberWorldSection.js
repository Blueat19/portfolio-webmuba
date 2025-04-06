import React from 'react';
import './ScottCyberWorldSection.css';
import scott from "../images/Scott.png"

export default function ScottCyberWorldSection(){
  return (
    <div className="container2">
        <div className='row'>
            <div className='col-12 col-md-6 col-sm-12'>
                  <img
                  src={scott}
                  alt="Scott"
                  width={400}
                   />
            </div>
            <div className='col-12 col-md-6 col-sm-12'>
            <h2 className="welcome-text"><strong>WELCOME TO</strong></h2>
      <h1 className="title-text">Scott’s CyberWorld</h1>

      <p className="tagline-text">
        Whether you want to increase your business influence or you are just starting out.
      </p>
      <p className="we-got-you-covered-text">We Got you covered.</p>

      <div className="services-container">
        <p className="services-text">From Logo and Banner Designs</p>
        <p className="services-text">Social Media Marketing and Advertising</p>
        <p className="services-text">to Website Development for the Business</p>
      </div>

      <div className="slogan-container">
        <p className="slogan-text">“CHANGING THE WORLD STEP BY STEP”</p>
      </div>
      <div 
      className = "btn btn-primary"
      >
         <strong>Contact Us!</strong>
      </div>
            </div>
        </div>
      
    </div>
  );
};