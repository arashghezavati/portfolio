// // import React from 'react'

// // const WorksItems = ({item}) => {
// //   return (
   
// //     <div className="work__card" key={item.id}>
// //         <img src= {item.image} alt='' className='work__img' />
// //         <h3 className="work__title">{item.title}</h3>
// //         <a href="#" className="work__button">
// //             Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
// //         </a>
// //     </div>
// //   )
// // }

// // export default WorksItems

// // import { Carousel } from 'react-responsive-carousel';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';
// // import React from 'react'


// // const WorksItems = ({ item }) => {
// //   return (
// //     <div className="work__card" key={item.id}>
// //       <Carousel showArrows={true}>
// //         <div>
// //           <img src={item.image1} alt="" className="work__img" />
// //         </div>
// //         <div>
// //           <img src={item.image2} alt="" className="work__img" />
// //         </div>
// //         {/* Add more images as needed */}
// //       </Carousel>
// //       <h3 className="work__title">{item.title}</h3>
// //       <a href="#" className="work__button">
// //         Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
// //       </a>
// //     </div>
// //   );
// // };

// // export default WorksItems;


// // import React, { useState } from 'react';



// // const WorksItems = ({ item }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const nextSlide = () => {
// //     if (item && item.images && item.images.length > 0) {
// //       setCurrentIndex((prevIndex) => (prevIndex === item.images.length - 1 ? 0 : prevIndex + 1));
// //     }
// //   };

// //   const prevSlide = () => {
// //     if (item && item.images && item.images.length > 0) {
// //       setCurrentIndex((prevIndex) => (prevIndex === 0 ? item.images.length - 1 : prevIndex - 1));
// //     }
// //   };

// //   return (
// //     <div className="work__card" key={item.id}>
// //       {item && item.images && item.images.length > 0 && (
// //         <>
// //           <img src={item.images[currentIndex]} alt="" className="work__img" />
// //           <button className="prev" onClick={prevSlide}>&#10094;</button>
// //           <button className="next" onClick={nextSlide}>&#10095;</button>
// //         </>
// //       )}
// //       <h3 className="work__title">{item.title}</h3>
   

// //       <a href="#" className="work__button">
// //         Demo <i className="bx bx-right-arrow-alt work__button-icon">
          
// //         </i>
// //       </a>
// //     </div>
// //   );
// // };

// // export default WorksItems;


// import React, { useState } from 'react';

// const WorksItems = ({ item }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     if (item && item.images && item.images.length > 0) {
//       setCurrentIndex((prevIndex) => (prevIndex === item.images.length - 1 ? 0 : prevIndex + 1));
//     }
//   };

//   const prevSlide = () => {
//     if (item && item.images && item.images.length > 0) {
//       setCurrentIndex((prevIndex) => (prevIndex === 0 ? item.images.length - 1 : prevIndex - 1));
//     }
//   };

//   const handleDemoClick = () => {
//     if (item && item.url) {
//       window.location.href = item.url; 
//     }
//   };

//   return (
//     <div className="work__card" key={item.id}>
//       {item && item.images && item.images.length > 0 && (
//         <>
//           <img src={item.images[currentIndex]} alt="" className="work__img" style={{ height: "200px" }}/>
//           <button className="prev" onClick={prevSlide}>&#10094;</button>
//           <button className="next" onClick={nextSlide}>&#10095;</button>
//         </>
//       )}
//       <h3 className="work__title">{item.title}</h3>
//       <button className="work__button" onClick={handleDemoClick}>
//         Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
//       </button>
//     </div>
//   );
// };

// export default WorksItems;



import React, { useState } from 'react';



const WorksItems = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    if (item && item.images && item.images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex === item.images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const prevSlide = () => {
    if (item && item.images && item.images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? item.images.length - 1 : prevIndex - 1));
    }
  };

  const handleDemoClick = () => {
    if (item && item.url) {
      window.location.href = item.url; 
    }
  };

  const handleGithubClick = () => {
    if (item && item.github) {
      window.location.href = item.github; 
    }
  }

  return (
//     <div className="work__card" key={item.id}>
//       {item && item.images && item.images.length > 0 && (
//         <>
//           <img 
//             src={item.images[currentIndex]} 
//             alt="" 
//             className="work__img" 
//             style={{ height: item.category === "web" ? "200px" : "auto" }} 
//           />
//           <div className='slide__btn'>
//            <button className="prev" onClick={prevSlide}>&#10094;</button>
//           <button className="next" onClick={nextSlide}>&#10095;</button>
//           </div>
//         </>
//       )}
      
//       <h3 className="work__title">{item.title}</h3>
//       <button className="work__button" onClick={handleDemoClick}>
//         Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
//       </button>
// <h5>{item.test}</h5>
      

//     </div>
<div className="work__card" key={item.id}>
  {item && item.images && item.images.length > 0 && (
    <>
      <div className="image-container">
        <img 
          src={item.images[currentIndex]} 
          alt="" 
          className="work__img" 
          style={{ height: item.category === "web" ? "200px" : "auto" }}
        />
        <h5 className="image-text">{item.test}</h5>
      </div>
      <div className='slide__btn'>
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </>
  )}
  
  <h3 className="work__title">{item.title}</h3>
  <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
  <button className="work__button" onClick={handleGithubClick} >
    Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
  </button>
  <button className="work__button" onClick={handleDemoClick}>
    Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
  </button>
  </div>
</div>
  );
};

export default WorksItems;
