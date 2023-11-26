import React from 'react';
import Dashboard from '../Dashboard';
import './common.css';
import './App.css';

const toolbarHeight = window.outerHeight - window.innerHeight;

function App() {

  return (
    <div 
      className="app__container"
      style={{ height: `calc(100% - ${toolbarHeight}px)` }}
    >
      <Dashboard />
    </div>
  );
}

export default App;