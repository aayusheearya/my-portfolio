// src/components/Skills/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills-heading">SKILLS</h2>
      <div className="skills-list">
        <div className="skill-item">DSA</div>
        <div className="skill-item">HTML</div>
        <div className="skill-item">CSS</div>
        <div className="skill-item">JavaScript</div>
        <div className="skill-item">OOPS</div>
        {/* Add more skills here */}
      </div>
    </div>
  );
};

export default Skills;
