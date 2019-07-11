import React, { Component } from "react";
import DeletePopup from "./DeletePopup";

class DeletePopupController extends Component {
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
        <button onClick={this.togglePopup.bind(this)}>DELETE</button>

        {this.state.showPopup ? (
          <DeletePopup closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default DeletePopupController;
