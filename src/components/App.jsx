import React, { useState } from "react";
import About from "./About";
import Alert from "./Alert";
import "./App.css";
import Navbar from "./Navbar.jsx";
import TextBox from "./TextBox.jsx";



function App()
{
    const [presentmode,changeMode]=useState('light')
    const [presentAlert,set_Alert]=useState(null)

    const toggleMode=()=>
    {
        if(presentmode==='light')
        {
            
            changeMode('dark');
        }
        else
        {
            
            changeMode('light');
            
        }
    }
    console.log(presentmode+" ");
    return (
        <div>
            <Navbar title='TextUtils' mode={presentmode} abouthead="About Us" togglemode={toggleMode}/>
            <TextBox boxhead="Enter your text here"/>
            {/*<About/>*/}
        </div>
    );
}

export default App;
