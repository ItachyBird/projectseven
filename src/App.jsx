import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Resources from './pages/Resources';
import Chats from './pages/Chats';
import LoginPopup from './pages/LoginPopup'; // Corrected import
import Updates from './pages/Updates'; // Import the new Updates page
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false); // State to manage login popup visibility

  return (
    <div className="app">
      <Router>
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        
        <NavBar setShowLogin={setShowLogin} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/updates" element={<Updates />} /> {/* Add the Updates route */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
