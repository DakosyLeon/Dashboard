import React from "react";
import "./CSS/popupinfo.css";

class PopupInfo extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup-inner">
          <div className="popup-content">
            <h1>{this.props.headline}</h1>
            <p>{this.props.text}</p>
          </div>
          <button onClick={this.props.onClose}>Close</button>
          {this.props.onDelete && (
            <button onClick={this.props.onDelete}>Delete</button>
          )}
        </div>
      </div>
    );
  }
}

export default PopupInfo;
