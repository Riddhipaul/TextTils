import React,{useState} from 'react';



export default function TextBox(props) 
{
    

    const handleClick=()=>
    {
        console.log("UpperCase was clicled");
        setText(text.toUpperCase());
    }

    const handleCount=()=>
    {
        setText(text.length);
    }

    const handleLower=()=>{
        setText(text.toLowerCase());
    }
    const handleOnChange=(event)=>
    {
        console.log("On change");
        setText(event.target.value);
    }

    const [text,setText]=useState("Enter your text here")

    return (
        <>
            <div className="form-group InputText">
                <label id="textboxheading">{props.boxhead}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div id="button-box">
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleClick}>Capitalize</button>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleCount}>Words Count</button>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleLower}>Lowercase</button>
            </div>
        </>
    )
}
