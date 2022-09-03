import React, { useState } from "react";
import About from "./About";
import "./App.css";
import Navbar from "./Navbar.jsx";
import TextBox from "./TextBox.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function App() {
    const [presentmode, changeMode] = useState('light')
    const [presentAlert, set_Alert] = useState(null)

    const toggleMode = () => {
        if (presentmode === 'light') {

            changeMode('dark');
        }
        else {

            changeMode('light');

        }
    }
    console.log(presentmode + " ");
    return (
        <Router>


            <div>
                <Navbar title='TextTils' mode={presentmode} abouthead="About Us" togglemode={toggleMode} />
                <Switch>
                    <Route exact path="/about" >
                        <About />
                    </Route>
                    <Route exact path="/">
                        <TextBox boxhead="Enter your text here" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
