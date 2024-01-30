import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState(""); /*whenever i want to change the text i should use setText function */

    const handleUpCick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowCick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearCick = () =>{
        let newText = '';
        setText(newText);
    }

    const handleCopyClick = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleSpaceClick = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) =>{
        //console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpCick}>Covert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowCick}>Covert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleSpaceClick}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleClearCick}>Clear Text</button>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
