import React from "react";


export default function DashboardRow(){

    /* Hier sollen später die Daten für den Inhalt der Tabelle geladen werden
    
    const [shipData, loadShipData] = React.useState([]);
    async function loadData() {
        try {
          const response = await fetch("http://localhost:7000/shipInfoDummyData", {
            method: "POST",
            headers: {
              "Accept" : "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(shipData)
          });
          if (response.status !== 201) {
            throw new Error("Invalid status code: " + response.status);
          }
          const newData = await response.json();
        } catch (err) {
          console.error("LOADING SHIP INFOS FAILED:", err);
        }
        //loadShipData();
     }
     */

    const shipInfosFix = [
        {id: 11232, name: 'Adrian Maersk', land:'Deutschland', size:324},
        {id: 21424, name: 'Aeneas', land:'Saudi Arabien', size:405},
        {id: 36343, name: 'A.P. Moeller', land:'Deutschland', size:485},
        {id: 28766, name: 'Admiral Santosh', land:'England', size:210}
    ];

    const shipInfo = shipInfosFix.map(data => (
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
 
    return(shipInfo)
}

