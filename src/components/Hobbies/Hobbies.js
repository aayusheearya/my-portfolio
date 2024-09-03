// src/components/Hobbies/Hobbies.js
import React from 'react';
import './Hobbies.css';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h2 className="hobbies-heading">HOBBIES</h2>
      <div className="hobbies-list">
        <div className="hobby-item">Photography</div>
        <div className="hobby-item">Travelling</div>
        <div className="hobby-item">Frontend Development</div>
      </div>
    </div>
  );
};

export default Hobbies;
