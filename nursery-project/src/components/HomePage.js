import React from 'react';
import '../styles/HomePage.css';
import { Link } from "react-router-dom";
import Plant from "../images/Background5.jpg";
import Plant1 from "../images/Flower.jpg";

const HomePage = () => { 
  return (
    // <div className="home-page">
    //   <h1>Welcome Nursery</h1>
    //   <p>Explore our wide range of </p>
    // </div>
  <div>
    <div className="home" style={{ backgroundImage: `url(${Plant})` }}>
        <div className="headerContainer">
          <h1>Plant Website</h1>
          <p>Best Plant In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
    </div>
    <div>
        <h2><i className='heading'>What makes us special </i></h2>
        <h1>Design & Planting </h1>

      <p> GREEN House - Best Nursery Plants in Hyderabad. Greening since 1987 from 
       a promise to make green  we are the friendliest local day nursery where everyone 
        senses welcome and included are only up the atmosphere is Paramount
      </p>
      <p>
       Being genuine, open, honest, and sincere. Achievements one of them among 
       supplied plants with high quality, developing strong relationships with beloved 
       customers, and we are glad to receive feedback from our customers.
      </p>
      <p>
       We would like to see a five to ten percent increase in our customer base each year. 
       Our marketing strategy includes providing a knowledgeable staff, affordable prices, 
       a great location, and top notch customer service
      </p>

  
      <img src={Plant1} alt="logo" height={"400"} width={"700"} className='Plant' />

   </div>
  </div>  

    

  );
};

export default HomePage;