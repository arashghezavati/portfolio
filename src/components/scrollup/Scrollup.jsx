import React from 'react';
import './scrollup.css';

const Scrollup = () => {
  window.addEventListener('scroll', () => {
const scrollup = document.querySelector('.scrollup');
if (window.scrollY > 600) {
  scrollup.classList.add('show-scroll');
} else {  
  scrollup.classList.remove('show-scroll');
}
  })
  return (
    <div>
      <a href="" className="scrollup">
        <i className='uil uil-arrow-up scrollup__icon'></i>
      </a>
    </div>
  )
}

export default Scrollup;
