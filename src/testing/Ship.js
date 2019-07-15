import React from "react";

const ship = props => {
  return (
    <div>
      <div>
        <li>
          <span>name: {props.children}</span>
          <button onClick={props.delRow}>Delete</button>
        </li>
      </div>
    </div>
  );
};

export default ship;
