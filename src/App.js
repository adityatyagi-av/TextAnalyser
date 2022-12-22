
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import React, { useState } from 'react'


function App() {
  const [mode1,setMode] = useState("light"); //Whether the dark mode is enabled or not
  const darkMode =()=>{
    setMode('dark')
  }
  return (
    <div className="App">
     <div>
     
      <Navbar title="TextUtils" hometext="Home" abouttext="About us" mode={mode1}/>
      <div className="container my-3">
      <Textfrom heading= "Enter the text to analyse"/>
      </div>
      <About/>
       </div>
    </div>
  );
}

export default App;
