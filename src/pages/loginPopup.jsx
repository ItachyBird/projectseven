import React, { useState } from 'react';
import '../css/loginPopup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the cross icon
const Loginpopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <span 
            onClick={() => setShowLogin(false)} 
            style={{ cursor: 'pointer', fontSize: '24px', color: '#0000ff' }} // Basic styling for visibility
          >
            <FontAwesomeIcon icon={faTimes} /> 
          </span>
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>

        <button type="submit">{currState === "Sign up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
