import React from 'react';
import "./Dashboard.css";

function DashboardMaster(props) {

    const shipsInfosFix = [
        {id: 11232, name: 'Adrian Maersk', land:'Deutschland', size:324},
        {id: 21424, name: 'Aeneas', land:'Saudi Arabien',size:405},
        {id: 36343, name: 'A.P. Moeller', land:'Deutschland', size:485},
        {id: 28766, name: 'Admiral Santosh', land:'England',size:210}
    ];
    
    const shipInfo = shipsInfosFix.map(data => (
        <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.land}</td>
            <td>{data.size}</td>
            <td>
                <button>INFO</button>
                <button>EDIT</button>
                <button>DELETE</button>
            </td>
        </tr>
    ));
    
    return (
        <div className="Ship-Info-Tabelle"> 
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
            <tbody>{shipInfo}</tbody>
        </table>
        <button>Reload Data</button>
        </div>
    );
}

export default DashboardMaster;

