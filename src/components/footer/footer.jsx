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
      state,
      tasksAmount,
      onClearCompleted,
      filter,
      onFilterChange
    } = this.props;

    const clearAmount = () => {
      const amount = state.filter(el => el.checked).length;
      return amount === 0 ? `clear-completed visibility` : "clear-completed";
    };

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      /* TODO Попробуй использовать здесь библиотеку classnames https://github.com/JedWatson/classnames
      чтобы набор классов для элемента определить */
      const clazz = isActive ? "selected" : "";

      /* TODO вынеси это в метод класса и дай нормально название. Допустим handleButtonClick. А то у тебя эта функция при каждом рендере создаётся */
      let handleButtonClick = () => onFilterChange(name);
      return (
        <button key={name} className={`control--item  ${clazz} `} onClick={handleButtonClick}>
          {label}
        </button>
      );
    });

    return (
      <footer className="footer">
        <span>{tasksAmount}</span>
        <div className="control">{buttons}</div>
        <button className={clearAmount()} onClick={onClearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
