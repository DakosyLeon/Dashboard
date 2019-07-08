import React from 'react';
import './App.css';
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard">
        <header className="Dashboard-header">
            <h2>Dashboard</h2>
        </header>
        <div className="Dashboard-body">
            <body>
                <table className="Dashboard-table">
                    <td>Nr
                        <tr>1</tr>
                    </td>
                    <td>Name
                        <tr>BS Freedom Heart</tr>
                    </td>
                    <td>Land
                        <tr>Kanada</tr>
                    </td>
                    <td>Typ
                        <tr>Container</tr>  
                    </td>
                </table>
            </body>
        </div>
    </div>
  );
}

export default Dashboard;
