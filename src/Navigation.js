import React, { Component } from "react";
import { Link} from "react-router-dom";


function Navigation() {
    
        return (
            <div>
                <ul>
                    <li><Link to="/">Login</Link> </li>          
                    <li><Link to="/dashboard">Dashboard</Link></li>    
                </ul>
            </div>
        )
    
}
export default Navigation;