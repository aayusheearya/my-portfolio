import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-heading">CONTACT</h2>
      <div className="contact-buttons">
        <a href={`tel:+919576059845`} className="contact-button">+91 9576059845</a>
        <a href={`mailto:aayusheearya@gmail.com`} className="contact-button">aayusheearya@gmail.com</a>
        <a 
          href={`https://www.linkedin.com/in/aayushee-8387861b3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`} 
          className="contact-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
