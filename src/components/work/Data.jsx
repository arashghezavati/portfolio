import samrt1 from "../../assets/smartPack/smartPack1.png";
import samrt2 from "../../assets/smartPack/smartPack2.png";
import samrt3 from "../../assets/smartPack/smartPack3.png";
import samrt4 from "../../assets/smartPack/smartPack4.png";
import samrt5 from "../../assets/smartPack/smartPack5.png";
import loanEase1 from "../../assets/loanEase/loanEase1.png";
import loanEase2 from "../../assets/loanEase/loanEase2.png";
import loanEase3 from "../../assets/loanEase/loanEase3.png";
import loanEase4 from "../../assets/loanEase/loanEase4.png";
import cafe1 from "../../assets/cafe/cafe1.png";
import cafe2 from "../../assets/cafe/cafe2.png";
import cafe3 from "../../assets/cafe/cafe3.png";
import cafe4 from "../../assets/cafe/cafe4.png";
import movie1 from "../../assets/movie/movie1.jpg";
import movie2 from "../../assets/movie/movie2.jpg";
import movie3 from "../../assets/movie/movie3.jpg";
import movie4 from "../../assets/movie/movie4.jpg";
import cosmos1 from "../../assets/cosmos/cosmos1.jpg";
import cosmos2 from "../../assets/cosmos/cosmos2.jpg";
import cosmos3 from "../../assets/cosmos/cosmos3.jpg";
import cosmos4 from "../../assets/cosmos/cosmos4.jpg";
import cosmos5 from "../../assets/cosmos/cosmos5.jpg";
import cosmos6 from "../../assets/cosmos/cosmos6.jpg";
import cosmos7 from "../../assets/cosmos/cosmos7.jpg";




import peopleCar from "../../assets/peeopleCar/peopleCar.png";

// import Work2 from "../../assets/work2.jpg";
// import Work3 from "../../assets/work3.jpg";
// import Work4 from "../../assets/work4.jpg";
// import Work5 from "../../assets/work5.jpg";

export const projectsData = [
  {
    id: 2,
    title: "LoanEase",
    category: "web",
    images: [loanEase1, loanEase2, loanEase3, loanEase4],
    test: "LoanEase is a loan management system that helps students to find and apply for loans. The website is created using React, Node.js, and MongoDB.",
    url : "https://loanease.ca/"
  },
  {
    id: 3,
    images: [cafe1, cafe2, cafe3, cafe4],
    title: "Bakery Cafe",
    category: "web",
    test: "This is a bakery cafe website that is created using React. The website is designed to showcase the bakery's products and services.",

    url : "https://smartpack.com.ng"
  },
    {
      id: 1,
      title: "Smart Pack",
      category: "web",
      images: [samrt1, samrt2, samrt3, samrt4, samrt5],
      test: "This is our second semester group project which is designed simply and develped with pure HTML, CSS, and JavaScript.",

      url : "https://smartpack.com.ng"
    },
   
  
    {
      id: 4,
      images: [movie1, movie2, movie3, movie4],
      title: "React Native Movies App",
      test: "This app is created using React Native and the Movie Database API. The app allows users to search for movies, view movie details, and search for movies by name",

      category: "app",
      url : "https://smartpack.com.ng"
    },
    {
      id: 5,
      images: [cosmos1, cosmos2, cosmos3, cosmos4, cosmos5, cosmos6, cosmos7],
      title: "React native Cosmos App",
      test: "This is our final project for the web and Mobile App Development program. React native, node.js, mongoDb and express are used to develop this app. we use jwt for authentication, AWS S3 for image, EC2 for hosting,Nginx as a reverse proxy and PM2 for process management.",

      category: "app",
      url : "https://smartpack.com.ng"
    },
    {
      id: 6,
      images: [peopleCar],
      title: "People & Cars React Apollo GraphQL",
      test: "The goal of putting this project with simple design on my portfolio is to show my skills in GraphQL, Apollo, and React.",

      category: "web",
      url : "https://smartpack.com.ng"
    },
    
  ];

  export const projectsNav =[
   
    {
        name: "web",
    },
    {
        name: "app",
    },
  
  ]
  
  
  
  
  
  
  
  
  
  