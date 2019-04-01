import React, {Component} from "react";

class TaskItem extends Component {

  // state = {
  //   checked: false
  // };

  // onChangeLabel = () => {
  //     console.log(`Change value of: ${this.props.label}`);
  // };





  render() {
    const {label, onDestroy, onChangeLabel} = this.props;
    //const{checked} = this.state;


    return (
      <div className="view" >
        <input type="checkbox" className='toggle' />
        <label onDoubleClick={onChangeLabel}>{ label }</label>
        <button className="destroy" onClick={ onDestroy }/>
      </div>
    );
  }
}

export default TaskItem;