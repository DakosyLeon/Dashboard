import React from "react";
import "./CSS/Dashboard.css";
import { DashboardRow2 } from "./DashboardRow";
import PopupInfo from "./PopupInfo";

const shipInfosFix = [
  {
    id: 11232,
    name: "Adrian Maersk",
    land: "Deutschland",
    size: 324,
    info: "Weiterführende Dakosy Informationen zum ausgewählten Schiff"
  },
  {
    id: 21424,
    name: "Aeneas",
    land: "Saudi Arabien",
    size: 405,
    info: "Dakosy Info"
  },
  {
    id: 36343,
    name: "A.P. Moeller",
    land: "Deutschland",
    size: 485,
    info: "Dakosy Info"
  },
  {
    id: 28766,
    name: "Admiral Santosh",
    land: "England",
    size: 210,
    info: "Weiterführende Dakosy Informationen zum ausgewählten Schiff"
  }
];

function DashboardMaster() {
  const [currentShip, setCurrentShip] = React.useState({});
  const [ships, setShips] = React.useState(shipInfosFix);

  const [showInfoPopup, setShowInfoPopup] = React.useState(false);
  const [showDeletePopup, setShowDeletePopup] = React.useState(false);

  const onCloseInfoPopup = () => {
    setShowInfoPopup(false);
  };
  const onCloseDeletePopup = () => {
    setShowDeletePopup(false);
  };

  //funktion nur zum öffnen des popups, onDeletePopup muss im popup aufgerufen werden
  const onOpenDeletePopup = id => {
    setShowDeletePopup(true);
    const ship = ships.filter(s => s.id === id)[0];
    setCurrentShip(ship);
  };

  const onOpenInfoPopup = id => {
    const ship = ships.filter(s => s.id === id)[0];
    setCurrentShip(ship);
    setShowInfoPopup(true);
  };

  const onDeleteRow = id => {
    const updatedShips = ships.filter(s => s.id !== id);

    setShips(updatedShips);

    setShowDeletePopup(false);
  };

  return (
    <div className="Ship-Info-Tabelle">
      {showInfoPopup && (
        <PopupInfo
          text={currentShip.info}
          onClose={onCloseInfoPopup}
          headline={currentShip.name}
        />
      )}
      {showDeletePopup && (
        <PopupInfo
          text="Bist du sicher?"
          onClose={onCloseDeletePopup}
          headline={`Delete Ship: ${currentShip.name}`}
          onDelete={() => onDeleteRow(currentShip.id)}
        />
      )}
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
          {ships.map(i => (
            <DashboardRow2
              key={i.id}
              shipInfo={i}
              onOpenInfoPopup={onOpenInfoPopup}
              onOpenDeletePopup={onOpenDeletePopup}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardMaster;
