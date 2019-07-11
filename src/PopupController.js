import React, { Component } from "react";
import PopupInfo from "./PopupInfo";

class PopupController extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePopup.bind(this)}> Info</button>

        {this.state.showPopup ? (
          <PopupInfo closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default PopupController;
