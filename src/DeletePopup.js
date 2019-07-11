import React from "react";
import "./CSS/popupinfo.css";

class DeletePopup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup-inner-delete">
          <div className="popup-content">
            <p>Are you sure?</p>
          </div>
          <button onClick={this.props.closePopup}>Yes</button>
          <button onClick={this.props.closePopup}>No</button>
        </div>
      </div>
    );
  }
}

export default DeletePopup;
