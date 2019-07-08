import React from 'react';
import './App.css';
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-titel">Dashboard Login</h2>
        
      </header>
      <body>
      <Login></Login>
      </body>
      </div>
  );
}

export default App;


/*
1. Login Komponente
  Zwei Text Input Felder
  Ein Button
2. Dashboard
  D-Master mit einer Liste aller Einträge
  D-Row als eigene Komponente
3. Props korrekt übergeben, dynmaische Anpassung
4. Komponenten Wechsel onClick
5. Typescript Konvertierung
6. Redux Implementation
7. Router Unterseiten ansteuern


*/