import logo from './logo.svg';
import './App.css';
import Colors from './Colors';
import LightGrid from './LightGrid';
import {useState} from 'react'
import React from 'react';

function App() {
  const [color, setColor] = useState('green')
  return (
    <div className="App">
      <LightGrid color={color}/>
      <Colors setColor={setColor}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
