import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) 
{
    const [myStyle,set_Color] = useState({
        color:"white",
        backgroundColor:"black"
    })
    const [currentMode,newMode]=useState(props.mode)


    const changeMode=()=>
    {
        if(currentMode==='light')
        {
            set_Color({color:'black',backgroundColor:'grey'})
            document.body.style.backgroundColor='black';
            newMode('dark')
            
        }
        else
        {
            set_Color({
                color:"white",
                backgroundColor:"black",
            });
            document.body.style.backgroundColor='white'
            newMode('light');
        }
    }
    

    return (
        <nav className="navbar navbar-expand-lg" style={myStyle}>
            <Link className="navbar-brand" to="/" style={myStyle}>{props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" style={myStyle}>Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" style={myStyle}>About</Link>
                    </li>

                </ul>
                </div>
                
                <div className="form-check form-switch">
                    <input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault"  onClick={changeMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
                </div>
            

        </nav>
    )
}

Navbar.propTypes =
{
    title: PropTypes.string.isRequired,
    abouthead: PropTypes.string
}

Navbar.defaultProps =
{
    title: 'This is title',
    abouthead: 'About',

}