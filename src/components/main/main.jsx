import React, { Component } from "react";
import Tasks from "../tasks/tasks";
import "./main.css";

class Main extends Component {
  render() {
    const {
      todos,
      currentEdit,
      onDestroy,
      onCheckItem,
      onChangeItemValue,
      tumblerStatus,
      onToggleAll,
      onCheckStatus,
      pressEnterForEdit
      //addChanges
    } = this.props;
    return (
      <main className="main">
        {todos.length > 0 && (
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={onToggleAll}
            checked={tumblerStatus}
          />
        )}
        <label className="pen" htmlFor="toggle-all" />
        <Tasks
          todos={todos}
          currentEdit={currentEdit}
          onCheckItem={onCheckItem}
          onDestroy={onDestroy}
          onChangeItemValue={onChangeItemValue}
          onCheckStatus={onCheckStatus}
          //addChanges={addChanges}
          pressEnterForEdit={pressEnterForEdit}
        />
      </main>
    );
  }
}

export default Main;
