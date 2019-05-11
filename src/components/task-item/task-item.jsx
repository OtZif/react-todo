import React, {Component} from "react";

class TaskItem extends Component {

  state= {
    checked: false
  };

  checkedItem = () => {
    this.setState((state) => {
      return {
        checked: !state.checked
      }
    });
    console.log(this.state);
  };
  render() {
    const {text, checked, isEditing, onCheckItem, onDestroy, onChangeLabel, onCheckStatus, addChanges} = this.props;
    //const x = currentEdit;
    //console.log(currentEdit);
    if(isEditing){
      return (
        <input
          id={isEditing.id}
          className="edit"
          autoFocus
          defaultValue = {text}
          //onChange={ text }
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              if(e.target.value.trim() === ''){
                return onDestroy()
              }
              return addChanges(e.target.value);
            }
          }}

        />
      );
    } else {
      return (
        <div className="view" >
          <input
            type="checkbox"
            className='toggle'
            onClick = { onCheckItem }
            onChange = { onCheckStatus }
            checked = { checked }
          />
          <label onDoubleClick={ onChangeLabel }>{ text }</label>
          <button className="destroy" onClick={ onDestroy } />
        </div>
      );
    }

    // return (
    //   <div className="view" >
    //     <input type="checkbox" className='toggle' />
    //     <label onDoubleClick={onChangeLabel}>{ text }</label>
    //     <button className="destroy" onClick={ onDestroy }/>
    //   </div>
    // );
  }
}

export default TaskItem;