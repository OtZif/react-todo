import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    const {
      text,
      checked,
      isEditing,
      onCheckItem,
      onDestroy,
      onChangeItemValue,
      onCheckStatus,
      pressEnterForEdit
    } = this.props;

    if (isEditing) {
      return (
        <input
          id={isEditing.id}
          className="edit"
          autoFocus
          defaultValue={text}
          onKeyUp={pressEnterForEdit}
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
        <label onDoubleClick={onChangeItemValue}>{text}</label>
        <button className="destroy" onClick={onDestroy} />
      </div>
    );
  }
}

export default TaskItem;
