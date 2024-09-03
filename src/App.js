// src/App.js
import React from 'react';
import Header from './components/Header'; 
import Skills from './components/Skills/Skills';
import WorkHighlights from './components/Workhighlights/Workhighlights';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Skills />
      <WorkHighlights />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
