import React, { Component } from "react";
import "./task.css";
import TaskItem from "../task-item/task-item";

class Task extends Component {
  render() {
    const {
      todos,
      currentEdit,
      onCheckItem,
      onDestroy,
      onChangeLabel,
      onCheckStatus,
      addChanges
    } = this.props;

    const elements = todos.map(item => {
      const { id, ...itemProps } = item;

      /* TODO Забудь про однобуквенную название вообще :) Раз ты используешь класс можешь вынести все эти функции
      как методы класса */
      let x = () => onCheckItem(id);
      let y = () => onDestroy(id);
      let z = () => onChangeLabel(id);
      return (
        <li key={id}>
          <TaskItem
            {...itemProps}
            isEditing={currentEdit === id}
            onCheckItem={x}
            onDestroy={y}
            onChangeLabel={z}
            onCheckStatus={onCheckStatus}
            addChanges={addChanges}
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

export default Task;
