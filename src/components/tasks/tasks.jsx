import React, { Component } from "react";
import "./tasks.css";
import TaskItem from "../task-item/task-item";

class Tasks extends Component {
  render() {
    const {
      todos,
      currentEdit,
      onCheckItem,
      onDestroy,
      onChangeItemValue,
      onCheckStatus,
      pressEnterForEdit
    } = this.props;

    const elements = todos.map(item => {
      const { id, ...itemProps } = item;

      /* TODO Забудь про однобуквенную название вообще :) Раз ты используешь класс можешь вынести все эти функции
      как методы класса */
      let x = () => onCheckItem(id);
      let y = () => onDestroy(id);
      let z = () => onChangeItemValue(id);
      return (
        <li key={id}>
          <TaskItem
            {...itemProps}
            isEditing={currentEdit === id}
            onCheckItem={x}
            onDestroy={y}
            onChangeItemValue = {z}
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
