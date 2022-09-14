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
      <Colors setColor={setColor} color={color}/>
    </div>
  );
}

export default App;
