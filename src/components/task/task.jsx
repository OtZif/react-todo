import React, {Component} from 'react';
import './task.css';
import TaskItem from "../task-item/task-item";

class Task extends Component {

  render() {
    const {todos, currentEdit, onCheckItem, onDestroy, onChangeLabel, onCheckStatus, addChanges} = this.props;
    //console.log(currentEdit);

    const elements = todos.map((item) => {

      const {id, ...itemProps} = item;
      return (
        <li key={id}>
          <TaskItem
            {...itemProps}
            isEditing = { currentEdit === id }
            onDestroy={() => onDestroy(id)}
            onChangeLabel = {() => onChangeLabel(id)}
            onCheckItem ={() => onCheckItem(id)}
            onCheckStatus = { onCheckStatus }
            addChanges ={addChanges}
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