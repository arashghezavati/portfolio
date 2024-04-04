import React, { useState } from 'react';
import './services.css';

const Services = () => {

  const [toggleState, setToggleState] =useState(0);

  const toggleTab = (index)=>{
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
 <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className='uil uil-web-grid services__icon'></i>
              <h3 className="services__title">Web <br/> Development</h3>
            </div>

            <span className="services__button" onClick={()=>toggleTab(1)}>
              View More<i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState ===1 ? "services__modal active-modal" : "services__modal"}>
              <div className="serivces__modal-content">
                <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Web
Development</h3>
                <p className="services__modal-description">
                  It is my goal to create a website that is both visually appealing and user-friendly. When you work with me, you can expect a website that is tailored to your brand and designed to attract and engage your target audience. I use the latest web development technologies to ensure that your website is responsive, accessible, and secure. I also provide ongoing support and maintenance to keep your website running smoothly.
           
                  
                  </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web Development</p>
                   
                  </li>


                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Deployment and support</p>
                    
                  </li>

                


                </ul>
                
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className='uil uil-arrow services__icon'></i>
              <h3 className="services__title">Mobile App Development</h3>
            </div>

            <span className="services__button" onClick={()=>toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className={toggleState ===2 ? "services__modal active-modal" : "services__modal"}>
              <div className="serivces__modal-content" onClick={()=> toggleTab(0)}>
                <i className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Mobile App Development</h3>
                <p className="services__modal-description">I specialize in developing mobile applications for Hybrid and Android platforms. I create user-friendly interfaces, interactive features, and seamless navigation to enhance user engagement and satisfaction. I ensure mobile responsiveness, accessibility, and security to provide a seamless user experience.
                  </p>
                
                

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> 
                    React Native development.</p>
                    
                  </li>


                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Android development.</p>
                    
                  </li>


                 
                </ul>
                
              </div>
            </div>
          </div>

          </div>
    
    </section>
  )
}

export default Services



