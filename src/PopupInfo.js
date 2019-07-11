import React from "react";
import "./CSS/popupinfo.css";

class PopupInfo extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup-inner">
          <h1>Additional information for detailed support</h1>
          <div className="popup-content">
            <p>Information about selected ship</p>
          </div>
          <button onClick={this.props.closePopup}>Close</button>
        </div>
      </div>
    );
  }
}

export default PopupInfo;
