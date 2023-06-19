import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
        console.log('Upper Case done');
        let newText = text.toUpperCase();
        setText(newText);
        props.handleAlertt('Upper Case is Enabled','success',"Sucess!");
    }

    const handleLoClick=()=>{
      console.log('Lower Case done');
        let newText = text.toLowerCase();
        setText(newText);
        props.handleAlertt('Lower Case is Enabled','success',"Sucess!");
    }
    const Clear=()=>{
      console.log('Cleared');
        let newText = "";
        setText(newText);
        props.handleAlertt('Text Cleared','success',"Sucess!");
    }
    const Speech=()=>{
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.handleAlertt('Speech is Enabled','success',"Sucess!");
    }
    const capFirst=()=>{
          
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    console.log(str2);
    setText(str2);
    props.handleAlertt('Capitalized First word','success',"Sucess!");
    }
    const handleCopy=()=>{
      var text = document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.handleAlertt('Copied to Clipboard','success',"Sucess!");
    }

    const handleSpace=()=>{
      setText(text.replace(/\s+/g, ' ').trim())
      props.handleAlertt('Space is normal now','success',"Sucess!");
    }
  
    const handleOnChange=(event)=>{
        console.log('On change done');
        setText(event.target.value);
    }
    
    const [text,setText] = useState("");

   
    // text = 'Enter txt';   //wrong way
    // setText('Enter txt')  //correct way to change state
    //mx-1,my-2 bootstrap class to provide space in x or y axis
    //dark,light,primary etc are classes to change colour in bootstrap
  return (
    <>
  <div className="container">
  <div className="mb-3">
  <h1 className={`text-${props.theme == 'light'?'dark':'light'}`}>{props.title}</h1>
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className={`form-control bg-${props.theme == 'dark'?'dark':'light' && props.theme == 'danger'?'danger':'light'}`} id="myBox" rows="8" style={{color: props.theme == 'light'?'black':'white' }}value={text} onChange={handleOnChange}> </textarea><br />  
  
  <button type="button" className="btn btn-dark mx-3" onClick={handleUpClick}>Convert to Upper Case</button>
  <button type="button" className="btn btn-primary" onClick={handleLoClick}>Convert to Lower Case</button>
  <button type="button" className="btn btn-danger mx-3" onClick={Clear}>Clear Text</button>
  <button type="button" className="btn btn-success" onClick={Speech}>Text to Speech</button>
  <button type="button" className="btn btn-secondary mx-3" onClick={capFirst}>Capitalized Case</button>
  <button type="button" className="btn btn-warning " onClick={handleSpace}>Remove Extra Space</button>
  <button type="button" className="btn btn-info mx-3" onClick={handleCopy}>Copy Text</button>

</div></div>
<div className="container my-3" >
<h2 className={`text-${props.theme == 'light'?'dark':'light'}`}>Text Summary</h2>
 <p className={`text-${props.theme == 'light'?'dark':'light'}`}>{text.trim() === '' ? 0 : text.match(/\S+/g).length} Words and {text.length} Characters {0.004*(text.split(' ').length)} Minutes to Read </p>
 <h2 className={`text-${props.theme == 'light'?'dark':'light'}`} >Preview</h2>
 <div className={`text-${props.theme == 'light'?'dark':'light'}`}>{text.length>0 ? text : "Enter Text to Preview"}</div>
</div> 

</>
  )
}
