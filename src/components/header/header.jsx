import React from "react";
import "./header.css";

const Header = ({ pressEnterButton }) => (
  <header className="header">
    <input
      type="text"
      className="header--new-task"
      id="newTask"
      placeholder="What needs to be done?"
      autoFocus
      onKeyUp={pressEnterButton}
    />
  </header>
);

export default Header;
