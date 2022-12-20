import React from 'react'
import {useState} from 'react';
export default function Textfrom(props) {
  const[text,newText]=useState('Enter text here');
  let updateText =() =>{
   let rex=text.toUpperCase();
   newText(rex);
   
   
  }
  const handleOnChange =(event) =>{
    console.log("On change");
    newText(event.target.value);
  }
  
  return (
    <div>
        <h1>{props.heading}</h1>
    <div className="mb-3">
     <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary" onClick={updateText}>Convert to upper case</button>
    </div>
  )
}
