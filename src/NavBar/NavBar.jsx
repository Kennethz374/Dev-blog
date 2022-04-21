import React from 'react'
import "./NavBar.css"

const NavBar = () => {
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
                    <li className="listItem">Home</li>
                    <li className="listItem">About</li>
                    <li className="listItem">Contact</li>
                    <li className="listItem">Write</li>
                    <li className="listItem">Logout</li>
                </ul>
            </div>

            <div className="right">
                <img src="https://images.unsplash.com/photo-1611459293885-f8e692ab0356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="avatar"
                className="right_image"/>
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default NavBar;