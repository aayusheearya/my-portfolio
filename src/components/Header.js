// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="header">
      <div className="left-content">
        <h1>Hello, I am Aayushee</h1>
        <button className="show-button" onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? 'Hide' : 'Show More'}
        </button>
        {showDescription && <p className="description">I’m Aayushee, a Computer Science graduate with a passion for exploring new ideas. I enjoy capturing moments through photography and traveling. Always eager to learn and adapt, I’m excited about new challenges and opportunities.</p>}
      </div>
      <div className="right-content">
        <img src="/profile-picture.jpg" alt="Profile" className="profile-img" />
        <a href="/resume.pdf" download="Aayushee_Resume.pdf" className="download-button">Download Resume</a>
      </div>
      <hr className="divider" /> 
    </div>
  );
};

export default Header;
