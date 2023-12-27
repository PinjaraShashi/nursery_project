import React from 'react';
import '../styles/Header.css'; // Import corresponding CSS file
import Navbar from './Navbar'; // Import Navbar component
// import Logo from "../images/Logo.jpeg"; //Import Logo

const Header = () => {
  return (
    <div className="header">
      <div className="logo" >
        {/* <h1>Nursery Project</h1>   */}
      </div>
      <Navbar />
    </div>
  );
};

export default Header;