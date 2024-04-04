import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] =useState(1);

    const toggleTab = (index)=>{
      setToggleState(index);
    }
  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
    
        <div className="qualification__container container">
            <div className="qualification__tabs">

                <div 
                className={toggleState ===1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(1)}>
                    
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education

            </div>

            <div 
            className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(2)} >                                  

                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
            </div>
            </div>
<div className="qualification__sections">
    <div 
    className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
    >
        <div className="qualification__data">
            <div>
            <h3 className="qualification__title">Web and Mobile Application Development</h3>
            <span className="qualification__subtitle">Post Degree Diploma</span>

            <span className="qualification__subtitle">Langara College</span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>January 2023 - April 2024
                </div>
        </div>

       <div>
        <span className="qualififcation__rounder"></span>
        <span className="qualification__line"></span>
        </div> 
        </div>


        <div className="qualification__data">
            <div></div>

            <div>
        <span className="qualififcation__rounder"></span>
        <span className="qualification__line"></span>
        </div>
            <div>
            <h3 className="qualification__title">Information Technology Management</h3>
            <span className="qualification__subtitle">Tehran University</span>
            <span className="qualification__subtitle">Master of Science(M.S.)</span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2012 - 2013
                </div>
        </div>

       
        </div>

        <div className="qualification__data">
            <div>
            <h3 className="qualification__title">Industrial Engineering</h3>
            <span className="qualification__subtitle">Qazvin University</span>
            <span className="qualification__subtitle">Bachelor of Science(B.S.)</span>

            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2007 - 2011
                </div>
        </div>

       <div>
        <span className="qualififcation__rounder"></span>
        <span className="qualification__line"></span>
        </div> 
        </div>


    </div>

    <div 
    className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
    >
        <div className="qualification__data">
            <div>
            <h3 className="qualification__title">Frontend Developer Intern</h3>
            <span className="qualification__subtitle">Nodak</span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>Jaunary 2021 - June 2022
                </div>
        </div>

       <div>
        <span className="qualififcation__rounder"></span>
        <span className="qualification__line"></span>
        </div> 
        </div>


        <div className="qualification__data">
            <div></div>

            <div>
        <span className="qualififcation__rounder"></span>
        <span className="qualification__line"></span>
        </div>
            <div>
            <h3 className="qualification__title">
Information Technology Security Specialist</h3>
            <span className="qualification__subtitle">Hampaye Company</span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>MArch 2015 - November 2021
                </div>
        </div>

       
        </div>

        {/* <div className="qualification__data">
            <div>
            <h3 className="qualification__title">cyber analysot</h3>
            <span className="qualification__subtitle">Apple-Institute</span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
        </div>

       <div>
        <span className="qualififcation__rounder"></span>
        <span className="qualification__line"></span>
        </div> 
        </div> */}


        
    </div>
</div>

            </div>
    </section>
  )
}

export default Qualification
