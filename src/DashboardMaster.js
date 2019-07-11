import React from "react";
import "./CSS/Dashboard.css";
import { DashboardRow2 } from "./DashboardRow";

const shipInfosFix = [
  { id: 11232, name: "Adrian Maersk", land: "Deutschland", size: 324 },
  { id: 21424, name: "Aeneas", land: "Saudi Arabien", size: 405 },
  { id: 36343, name: "A.P. Moeller", land: "Deutschland", size: 485 },
  { id: 28766, name: "Admiral Santosh", land: "England", size: 210 }
];

function DashboardMaster() {
  return (
    <div className="Ship-Info-Tabelle">
      <header>
        <h2>Info Details</h2>
      </header>
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
          {shipInfosFix.map(i => (
            <DashboardRow2 key={i.id} shipInfo={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardMaster;
