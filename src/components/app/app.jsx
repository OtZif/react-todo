import React, { Component } from 'react';
import Title from '../title/title';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import './app.css';
//import Task from "../task/task";



class App extends Component{
  maxId = 100;
  state = {
    todoMassive: [
      {id: 1, className: 'checked', label: 'hello friend'},
      {id: 2, className: '', label: '123Go'},
      {id: 3, className: 'checked', label: 'UPs'},
      {id: 4, className: 'checked', label: 'UPs2'}
    ]
  };



  deleteItem = (id) => {
    this.setState(({todoMassive}) => {
        const idx = todoMassive.findIndex((el) => el.id === id);
        const before = todoMassive.slice(0, idx);
        const after = todoMassive.slice(idx + 1);
        const newArray = [...before, ...after];

        return {
          todoMassive: newArray
        }
      }
    );
  };

  addItem = (e) => {
    // if (this.textInput.value.trim() === '') {
    //   return
    // }

    const newItem = {
      id: this.maxId++,
      className: '',
      label: e
    };

    this.setState(({ todoMassive }) =>{

      const newArr = [
        ...todoMassive,
        newItem
      ];

      return{
        todoMassive: newArr
      };

    });


    if(e.key === 'Enter') {
      
      console.log(`Add ${e}`);
    }
  };



  changeItemValue = (id) => {
    console.log(`Change value of: ${id}`);
  };


  render() {

    localStorage.setItem('todo', JSON.stringify(this.state));

    return (
      <div>
        <Title/>
        <section className="todo">
          <Header addItem = { this.addItem } />
          <Main
            todo = { this.state.todoMassive }
            onDestroy={this.deleteItem}
            onChangeLabel={ this.changeItemValue }
          />
          <Footer/>
        </section>
      </div>
    );
  }

}


export default App;