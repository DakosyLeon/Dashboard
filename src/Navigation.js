import React, { Component } from "react";
import { Link} from "react-router-dom";


function Navigation() {
    
    return (
        <div className="nav">
             <ul>
                <li><Link to="/login">Login</Link> </li>          
                <li><Link to="/dashboard">Dashboard</Link></li>    
  
            </ul>
        </div>
    )
}
export default Navigation;