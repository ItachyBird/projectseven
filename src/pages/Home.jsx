import React from 'react';

import '../css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-section">
        {/* Include NavBar inside the left section */}
        <NavBar />
      </div>
      <div className="right-section">
        {/* Content for the right section */}
        <h2>Welcome to the Home Page</h2>
        <p>This is the right section content.</p>
      </div>
    </div>
  );
};

export default Home;
