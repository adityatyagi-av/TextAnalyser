import React,{useState} from 'react';
import PropTypes from 'prop-types';


export default function Textfrom(props) {
  const[text,newText]=useState('');
  let updateText1 =() =>{
   let rex=text.toUpperCase();
   newText(rex);
   props.showAlert("Converted to UpperCase","success")
  }

  let updateText2 =() =>{
    let rex=text.toLowerCase();
    newText(rex); 
    props.showAlert("Coverted to LowerCase","success")
   }
   let updateText3 =() =>{
    newText(" ")
    props.showAlert("cleared","success")
   }
  const handleOnChange =(event) =>{
    console.log("On change");
    newText(event.target.value);
  }
  

  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
     <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'rgb(49 16 96)' , color: props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary" onClick={updateText1}>Convert to upper case</button>
    <button className="btn btn-primary mx-3" onClick={updateText2}>Convert to lower case</button>
    <button className="btn btn-primary " onClick={updateText3}>Clear</button>
    </div>
    <div className="container my-3">
      <h1 className='my-4'>Your Text Summary</h1>
      <p>Your text have {text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008* text.split(' ').length} Minutes read</p>
      <h2 className="my-3">Preview</h2>
      <p className='my-3'>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
