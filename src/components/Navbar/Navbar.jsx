
import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
             
const Navbar = () => {
    return (  
     
        <nav className="navbar">
             <h1 id="nav">Track Treasures</h1>
            <ul>
                <li class="form"><Link to="/">Form</Link></li>
                <li class="form"><Link to="/expenses">Expenses</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;