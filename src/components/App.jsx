import React from "react";
import About from "./About";
import "./App.css";
import Navbar from "./Navbar.jsx";
import TextBox from "./TextBox.jsx";


function App() {

    return (
        <div>
            {/*----<Navbar title='TextUtils' abouthead="About Us" />
            //<TextBox boxhead="Enter your text here"/>--*/}
            <About/>
        </div>
    );
}

export default App;
