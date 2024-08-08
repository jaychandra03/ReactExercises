import React, { useState } from "react";
import './navstyles.css';
import { Link } from "react-router-dom";
const  Navbar=()=>{


   

    return(
        <>
        <nav className="navbar">
            <h1 className="title">Payments Application</h1>
            <ul className="menu">
                <li className="menuItem">
                    <Link to="/find" className="navbar-link" >Find a transaction </Link> </li>
                <li className="menuItem">
                    <Link to="/new" className="navbar-link">New transaction</Link> </li>
            </ul>
            </nav>
        </>
    );
}
export default Navbar;