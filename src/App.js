
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode1,setMode] = useState('light'); //Whether the dark mode is enabled or not
  const [alert,setAlert]=useState(null);
 
  const alertNotify =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null)
    },1500)
  }  
 
  const darkMode =()=>{
   if(mode1==="light"){
    setMode('dark');
    document.body.style.backgroundColor ="rgb(25 7 56)";
    document.body.style.color ="white";    
    alertNotify("Dark mode has been enabled","success");
    
  }
   else{
    setMode('light');
    document.body.style.backgroundColor ="white";
    document.body.style.color ="black"; 
    document.querySelector("h2").style.color="black";
    alertNotify("Light mode has been enabled","success");
      
  }
  }
  return (
    
    <>
    <Router>
    {/* /users --->- Component-1
    /users/home-->--->-Component 2*/}
      <div className={`App ${mode1}`}>
      <Navbar title="TextAnalyser" hometext="Home" abouttext="About us" mode={mode1} toggleMode={darkMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={   <Textfrom heading= "Enter the text to analyse" mode={mode1} showAlert={alertNotify}/>
     } />
      </Routes>
      </div>
      </div>
      </Router> 
      </>
  );
}

export default App;
