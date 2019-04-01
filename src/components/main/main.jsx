import React, {Component} from 'react';
import Task from '../task/task'
import './main.css';

class Main extends Component {
  // state = {
  //   todoMassive: [
  //     {id: 's1', className: 'checked', label: 'hello friend'},
  //     {id: 's2', className: '', label: '123Go'},
  //     {id: 's3', className: 'checked', label: 'UPs'},
  //     {id: 's4', className: 'checked', label: 'UPs2'}
  //   ]
  // };
  // deletItem = (id) => {
  //   this.setState(({todoMassive}) => {
  //       const idx = todoMassive.findIndex((el) => el.id === id);
  //       const before = todoMassive.slice(0, idx);
  //       const after = todoMassive.slice(idx + 1);
  //       const newArray = [...before, ...after];
  //
  //       return {
  //         todoMassive: newArray
  //       }
  //     }
  //   );
  // };
  //
  //
  // changeItemValue = (id) => {
  //   console.log(`Change value of: ${id}`);
  // };


  render() {
    //let todoMassive = JSON.parse(localStorage.getItem('todo')) == null ? [] : JSON.parse(localStorage.getItem('todo'));

    //localStorage.setItem('todo', JSON.stringify(todoMassive));

    const {todo, onDestroy, onChangeLabel} = this.props;
    return (
      <main className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
        />
        <label className="pen" htmlFor='toggle-all'/>
        <Task todo = {todo}
              onDestroy={ onDestroy }
              onChangeLabel={ onChangeLabel }/>
      </main>
    );
  }
}

export default Main;