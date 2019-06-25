import React, { Component } from "react";
import classNames from "classnames";
import "./footer.css";

class Footer extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" }
  ];

  clearAmount = () => {
    const amount = this.props.state.filter(el => el.checked).length;
    return amount === 0 ? `clear-completed visibility` : "clear-completed";
  };

  handleButtonClick = name => {
    return () => this.props.onFilterChange(name);
  };

  renderButtons = () => {
    return this.buttons.map(({ name, label }) => {
      return (
        <button
          key={name}
          className={classNames(
            `control--item  ${this.props.filter === name ? "selected" : ""} `
          )}
          onClick={this.handleButtonClick(name)}
        >
          {label}
        </button>
      );
    });
  };

  render() {
    const { tasksAmount, onClearCompleted } = this.props;

    return (
      <footer className="footer">
        <span>{tasksAmount}</span>
        <div className="control">{this.renderButtons()}</div>
        <button className={this.clearAmount()} onClick={onClearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
