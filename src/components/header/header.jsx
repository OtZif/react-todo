import React from "react";
import "./header.css";

const Header = props => (
  <header className="header">
    <input
      type="text"
      className="header--new-task"
      id="newTask"
      placeholder="What needs to be done?"
      autoFocus
      onKeyUp={e => {
        if (e.keyCode === 13) {
          if (e.target.value.trim() === "") {
            return;
          } else {
            props.addItem(e.target.value);
            e.target.value = "";
          }
        }
      }}
    />
  </header>
);

export default Header;
