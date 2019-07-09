import React from 'react';
import "./Dashboard.css";
import DashboardRow from "./DashboardRow";

function DashboardMaster() {
    
    return (
        <div className="Ship-Info-Tabelle"> 
            <header><h2>Info Details</h2></header>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Land</th>
                        <th>Größe</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {<DashboardRow></DashboardRow>}
                </tbody>
            </table>        
        </div>
    );
}

export default DashboardMaster;

    