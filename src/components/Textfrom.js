import React from 'react'
import {useState} from 'react';
export default function Textfrom(props) {
  const[text,newText]=useState('Enter text here');
  let updateText1 =() =>{
   let rex=text.toUpperCase();
   newText(rex);
   
   
  }

  let updateText2 =() =>{
    let rex=text.toLowerCase();
    newText(rex);
    
    
   }

  const handleOnChange =(event) =>{
    console.log("On change");
    newText(event.target.value);
  }
  
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
    <div className="mb-3">
     <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary" onClick={updateText1}>Convert to upper case</button>
    <button className="btn btn-primary mx-3" onClick={updateText2}>Convert to lower case</button>
   
    </div>
    <div className="container">
      <h1 className='my-4'>Your Text Summary</h1>
      <p>Your text have {text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008* text.split(' ').length} Minutes read</p>
      <h2 className="my-3">Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
