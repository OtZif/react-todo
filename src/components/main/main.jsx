import React, { Component } from "react";
import Task from "../task/task";
import "./main.css";

class Main extends Component {
  render() {
    const {
      todos,
      currentEdit,
      onDestroy,
      onCheckItem,
      onChangeLabel,
      toggleStatus,
      onToggleAll,
      onCheckStatus,
      addChanges
    } = this.props;
    return (
      <main className="main">
        {todos.length > 0 && (
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={onToggleAll}
            checked={toggleStatus}
          />
        )}
        <label className="pen" htmlFor="toggle-all" />
        {/* TODO Почему компонент называется не во множественном числе? По идее должно быть Tasks. Лучше переименовать */}
        <Task
          todos={todos}
          currentEdit={currentEdit}
          onCheckItem={onCheckItem}
          onDestroy={onDestroy}
          onChangeLabel={onChangeLabel}
          onCheckStatus={onCheckStatus}
          addChanges={addChanges}
        />
      </main>
    );
  }
}

export default Main;
