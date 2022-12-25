
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import React, { useState } from 'react'


function App() {
  const [mode1,setMode] = useState('light'); //Whether the dark mode is enabled or not
  const darkMode =()=>{
   if(mode1==="light"){
    setMode('dark');
    document.body.style.backgroundColor ="rgb(36, 35, 35)";
    document.body.style.color ="white";    
    document.querySelector("h2").style.color="white";
  }
   else{
    setMode('light');
    document.body.style.backgroundColor ="white";
    document.body.style.color ="black"; 
    document.querySelector("h2").style.color="black";
    
   }
  }
  return (
    <div className={`App ${mode1}`}>
     <div>
     
      <Navbar title="TextAnalyser" hometext="Home" abouttext="About us" mode={mode1} toggleMode={darkMode}/>
      <div className="container my-3">
      <Textfrom heading= "Enter the text to analyse" mode={mode1}/>
      </div>
      <About/>
       </div>
    </div>
  );
}

export default App;
