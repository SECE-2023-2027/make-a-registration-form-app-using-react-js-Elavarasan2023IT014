import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Social Platform</div>
      <ul className="nav-links">
        <li className="active">Home</li>
        <li>Explore</li>
        <li>Create</li>
        <li>Share</li>
      </ul>
    </nav>
  );
};

export default NavBar;
