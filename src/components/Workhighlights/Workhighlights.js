import React from 'react';
import './Workhighlights.css';

const WorkHighlights = () => {
  return (
    <div className="work-highlights">
      <h2 className="work-heading">WORK HIGHLIGHTS</h2>
      <div className="snapshot-gallery">
        <img src="/project1.png" alt="Project 1" className="snapshot" />
        <img src="/project2.png" alt="Project 2" className="snapshot" />
        <img src="/project3.png" alt="Project 3" className="snapshot" />
        <img src="/project4.png" alt="Project 4" className="snapshot" />
        <img src="/project5.png" alt="Project 5" className="snapshot" />
        <img src="/project6.png" alt="Project 6" className="snapshot" />
        
        {/* Add more snapshots as needed */}
      </div>
    </div>
  );
};

export default WorkHighlights;
