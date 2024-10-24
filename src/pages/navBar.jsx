import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router
import '../css/navBar.css';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon

const NavBar = ({ setShowLogin }) => { // Accept setShowLogin as a prop
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItemsRef = useRef([]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // GSAP animation function
  const handleNavItemClick = (index) => {
    const scaleValue = isMobileMenuOpen ? 1.5 : 2;

    gsap.fromTo(
      navItemsRef.current[index],
      { scale: 1 },  // Start state
      { scale: scaleValue, duration: 0.2, yoyo: true, repeat: 1 } // End state with animation
    );
  };

  return (
    <nav className="nav-bar">
      <div className="logo">
        <NavLink to="/">Logo</NavLink>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <ul className="nav-list">
          {['Home', 'Categories', 'Resources', 'Chats'].map((item, index) => (
            <li
              key={index}
              className="nav-item"
              ref={(el) => navItemsRef.current[index] = el}
              onClick={() => handleNavItemClick(index)}
            >
              <NavLink
                to={`/${item.toLowerCase()}`}
                activeClassName="active" // Active class for the current route
                exact
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="burger-menu" onClick={toggleMobileMenu}>
          <span className="burger-icon">&#9776;</span>
        </div>

        <div className="login-container">
          <button onClick={() => setShowLogin(true)} className="login-button"> {/* Open login popup */}
            <FontAwesomeIcon icon={faUser} /> {/* Human icon */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
