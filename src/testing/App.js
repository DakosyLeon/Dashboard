import React from "react";
import Ship from "./Ship";

class App extends React.Component {
  state = {
    ships: [
      { name: "MS Maesk", size: 213 },
      { name: "Binnenschiff", size: 123 },
      { name: "Tel Aviv", size: 300 }
    ]
  };

  deleteRow(index, e) {
    const ships = Object.assign([], this.state.ships);
    ships.splice(index, 1);
    this.setState({ ships: ships });
  }

  additem() {
    const newShip = { name: "Dakosy", size: 199 };
    this.setState({ ships: [...this.state.ships, newShip] });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.ships.map((ship, index) => {
            return (
              <Ship name={ship.name} delRow={this.deleteRow.bind(this, index)}>
                {ship.size}{" "}
              </Ship>
            );
          })}
        </div>
        <div>
          <input type="text" />
          <button onClick={this.addItem}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
