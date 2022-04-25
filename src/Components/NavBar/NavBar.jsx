import React from 'react'
import "./NavBar.css"
import {  Link } from "react-router-dom";


const NavBar = () => {
    const user = false
    return (
        <div className="NavBar_Container">

            <div className="left">
                <i className="icons fa-brands fa-github-square"></i>
                <i className="icons fa-brands fa-medium"></i>
                <i className="icons fa-brands fa-linkedin"></i>
                <i className="icons fa-solid fa-envelopes-bulk"></i>
            </div>

            <div className="center">
                <ul className="centerList">
                    <li className="listItem"><Link to="/" className="link">Home</Link></li>
                    <li className="listItem"><Link to="/about" className="link">About</Link></li>
                    <li className="listItem"><Link to="/contact" className="link">Contact</Link></li>
                    <li className="listItem"><Link to="/write" className="link">Write</Link></li>
                    <li className="listItem">{user && "Logout"}</li>
                </ul>
            </div>
        
            <div className="right">
                {user? (
                    <img src="https://images.unsplash.com/photo-1611459293885-f8e692ab0356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="avatar"
                className="right_image"/>
            ):(
                <ul className="centerList">
                    <li className="listItem">
                        <Link className="link" to="/login">Login</Link>
                    </li>
                    <li className="listItem">
                        <Link className="link" to="/register">Register</Link>
                    </li>
                </ul >
            )}  
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default NavBar;