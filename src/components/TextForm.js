import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handleClclick = () =>{
        console.log("clear was clicked" );
        let newText = '';
        setText(newText);

    }

    const handleLoclick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);

    }

    const handleOnchange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }

    const[text , setText ] = useState('');
    
    
  return (
    <>
    <div className='container' style ={{ color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value ={text} onChange = {handleOnchange} style ={{ backgroundColor: props.mode === 'dark'?'grey':'white'}} id="myBox" rows="8"></textarea>

        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx -3" onClick={handleClclick}>Clear</button>


    </div>
    
    <div className="container my-4"  style ={{ color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{ 0.008 * text.split(" ").length} Minutes read</p>
    </div>
    </>
  )
}
 