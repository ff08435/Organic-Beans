import React from 'react';
import beanIcon from '../../assets/bean-icon.png';  // Replace with your bean icon path

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#quiz">Quiz</a></li>
        <li><a href="#beans">Beans</a></li>
        <li className="bean-icon-wrapper">
          <img src={beanIcon} alt="Bean Icon" className="bean-icon" />
        </li> {/* Bean Icon in the middle */}
        <li><a href="#signup">Signup</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
