import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from "../images/Logo.jpeg";


const Navbar = () => {
  return (    
    <div className="navbar">
      <img src={Logo} alt="logo" height={"70"} width={"200"}  className='Logo' />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
    
  );
};

export default Navbar;
