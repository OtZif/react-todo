import React, {Component} from 'react';
import './task.css';
import TaskItem from "../task-item/task-item";

class Task extends Component {

  render() {
    const {todo, onDestroy, onChangeLabel} = this.props;
    const elements = todo.map((item) => {

      const {id, className, ...itemProps} = item;
      return (
        <li
          key={id}
          className={className}>
          <TaskItem
            {...itemProps}
            onDestroy={() => onDestroy(id)}
            onChangeLabel = {() => onChangeLabel(id)}/>
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