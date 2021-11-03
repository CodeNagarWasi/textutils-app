import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import './App.css';


export default function TextForm(props) {
    const handleUpperCaseClick = ()=>{
        console.log('UpperCase is click ed')
        setText(text.toUpperCase())
        props.showAlert("Your text has been converted to upper case","success")
    }
    const handleLowerCaseClick = ()=>{
        console.log('Lowercase is click ed')
        setText(text.toLowerCase())
        props.showAlert("Your text has been converted to lower case","success")

    }
    const handleOnChange = (event)=>{
        console.log('UpperCase is clicked')
        setText(event.target.value)
    }
    const handleClearClick = ()=>{
        console.log('clear is clicked')
        setText("")
        props.showAlert("Cleared","success")

    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select()
        text.setSelectionRange(0,999999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("Your text has been copied to clipboard","success")

    }
    const handleEntraSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed","success")

    }
    const handleEntraLine = ()=>{
        let newText = text.split("\n")
        setText(newText.join(" "))
        props.showAlert("Entra Lines removed","success")

    }
    const [text, setText] = useState('')
    return (
        <>
        <div className="container">
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
            <textarea className="form-control" id="myBox" rows="5" onChange={handleOnChange} value={text} placeholder="Enter some text"></textarea>
        </div>
        <p><button className="btn btn-outline-info mx-3" onClick={handleUpperCaseClick}>Convert To Uppercase</button></p>
        <p><button className="btn btn-outline-info mx-3" onClick={handleLowerCaseClick}>Convert To LowerCase</button></p>
        <p><button className="btn btn-outline-info mx-3" onClick={handleClearClick}>Clear Text</button></p>
        <p><button className="btn btn-outline-info mx-3" onClick={handleCopy}>Copy Text</button></p>
        <p><button className="btn btn-outline-info mx-3" onClick={handleEntraSpace}>Remove Extra Spaces</button></p>
        <p><button className="btn btn-outline-info mx-3" onClick={handleEntraLine}>Remove Extra Lines</button></p>
        </div>
        <div className="container my-4">
            <h2>Your text Summary--</h2>
            <h4>Letters--{text.length}    &nbsp; &nbsp; &nbsp; &nbsp;||    &nbsp; &nbsp; &nbsp; &nbsp; Words--{text.split(" ").length}</h4>
            <h2 className="my-4" id="Preview">Preview</h2>
            <p className="my-3" id="Preview-content">{text}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    heading : PropTypes.string
}

