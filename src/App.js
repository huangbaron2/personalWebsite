import React from 'react';
import HeaderBar from './HeaderBar'
import Front from './Front.js'
import Projects from './Projects.js'
import './App.css';

function App() {
  return (
    <div className = "appBox">
      <HeaderBar/>
      <Front/>
      <Projects/>
    </div>
  );
}

export default App;