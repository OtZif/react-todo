import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" }
  ];

  render() {
    const {
      onSize,
      onClearCompleted,
      filter,
      onFilterChange,
      onVisibleButton
    } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "selected" : "";
      let x = () => onFilterChange(name);
      return (
        <button
          key={name}
          className={`control--item  ${clazz} `}
          onClick={x}
        >
          {label}
        </button>
      );
    });

    return (
      <footer className="footer">
        <span>{onSize}</span>
        <div className="control">{buttons}</div>
        <button className={onVisibleButton} onClick={onClearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
