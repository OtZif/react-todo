import React, {Component} from 'react';
import Task from '../task/task'
import './main.css';

class Main extends Component {
  render() {
    const {todos, currentEdit, onCheckItem, onDestroy, onChangeLabel, toggleStatus, onToggleAll, onCheckStatus, addChanges} = this.props;
    return (
      <main className="main">
        { todos.length > 0 &&
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={ onToggleAll }
            checked={ toggleStatus }
          />
        }
        <label className="pen" htmlFor='toggle-all'/>
        <Task todos = { todos }
              currentEdit = { currentEdit }
              onDestroy={ onDestroy }
              onChangeLabel={ onChangeLabel }
              onCheckItem = { onCheckItem }
              onCheckStatus ={onCheckStatus}
              addChanges = {addChanges}
        />
      </main>
    );
  }
}

export default Main;