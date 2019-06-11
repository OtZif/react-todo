import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    const {
      text,
      checked,
      isEditing,
      onCheckItem,
      onDestroy,
      onChangeLabel,
      onCheckStatus,
      addChanges
    } = this.props;

    if (isEditing) {
      return (
        <input
          id={isEditing.id}
          className="edit"
          autoFocus
          defaultValue={text}
          onKeyUp={e => {
            if (e.keyCode === 13) {
              if (e.target.value.trim() === "") {
                return onDestroy();
              }
              return addChanges(e.target.value);
            }
          }}
        />
      );
    }
    return (
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          onClick={onCheckItem}
          onChange={onCheckStatus}
          checked={checked}
        />
        <label onDoubleClick={onChangeLabel}>{text}</label>
        <button className="destroy" onClick={onDestroy} />
      </div>
    );
  }
}

export default TaskItem;
