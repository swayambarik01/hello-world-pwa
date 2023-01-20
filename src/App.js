import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddToHomeScreen } from 'react-pwa-add-to-homescreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
      </header>
      <AddToHomeScreen skipFirstVisit={false}/>
    </div>
    
  );
}

export default App;
