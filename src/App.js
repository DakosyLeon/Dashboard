import React from 'react';
import './App.css';
import DashboardMaster from "./DashboardMaster";
import Login from './Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">       
      </header>
      <body>
        <Login></Login>
        <DashboardMaster></DashboardMaster>
      </body>
    </div>
  );
}

export default App;


/*
1. Login Komponente
  Zwei Text Input Felder
  Ein Button
2. DashboardController
  D-Master mit einer Liste aller Einträge
  D-Row als eigene Komponente
3. Props korrekt übergeben, dynmaische Anpassung
4. Komponenten Wechsel onClick
5. Typescript Konvertierung
6. Redux Implementation
7. Router Unterseiten ansteuern

8. Row als Komponente


*/