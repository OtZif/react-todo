import React, { Component } from "react";
import "./tasks.css";
import TaskItem from "../task-item/task-item";

class Tasks extends Component {
  onCheckItem = id => {
    return () => this.props.onCheckItem(id);
  };
  onDestroy = id => {
    return () => this.props.onDestroy(id);
  };
  onChangeItemValue = id => {
    return () => this.props.onChangeItemValue(id);
  };

  render() {
    const { todos, currentEdit, onCheckStatus, pressEnterForEdit } = this.props;

    const elements = todos.map(item => {
      const { id, ...itemProps } = item;

      return (
        <li key={id}>
          <TaskItem
            {...itemProps}
            isEditing={currentEdit === id}
            onCheckItem={this.onCheckItem(id)}
            onDestroy={this.onDestroy(id)}
            onChangeItemValue={this.onChangeItemValue(id)}
            onCheckStatus={onCheckStatus}
            pressEnterForEdit={pressEnterForEdit}
          />
        </li>
      );
    });
    return (
      <ul className="main--list" id="mainList">
        {elements}
      </ul>
    );
  }
}

export default Tasks;
