import React from 'react';
import "./Dashboard.css";
import DashboardMaster from "./DashboardMaster";

const MODE_LOGIN = "MODE_LOGIN";
const MODE_DASHBOARD = "MODE_DASHBOARD";

export default function Login() {
    const [mode, setMode] = React.useState(MODE_LOGIN); 

    if (mode === MODE_DASHBOARD)
      return (
        <DashboardMaster      
        />
      );
        return(
            <div>
                <header>
                <h2>Dashboard Login</h2>
                </header>
                <div>
                    <input size="25" placeholder="Emailadresse"></input><br />
                    <input size="25" placeholder="Passwort" type="password"></input>
                </div>
                <button onClick={() => setMode(MODE_DASHBOARD)}>Log In</button>
            </div>
        );        
}

    
