import React, { Component } from 'react';
import Title from '../title/title';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import './app.css';
//import Task from "../task/task";



class App extends Component{

  lastId = 0;
  statee = {
    /* { id: Number, text: String, checked: Boolean } */
    todos: [],
    currentEdit: null,
    currentFilter: 'all',
    allChecked: false,

  };

  state = JSON.parse(localStorage.getItem('todo')) == null ? this.statee : JSON.parse(localStorage.getItem('todo'));


  addLocal = () =>{
    localStorage.setItem('todo', JSON.stringify(this.state));

  };


  deleteItem = (id) => {
    this.setState(({todos}) => {
        const newArr = todos.filter((el) => el.id !== id);

        return {
          todos: newArr,
          allChecked: newArr.every( (el) => el.checked === true)
        }
      }
    )
  };
  clearCompleted = () => {
    this.setState(({todos}) =>{
      const newArr= todos.filter((el) => el.checked === false);
      return{
        todos: newArr,
      }
    });
  };


  addItem = (text) => {
    this.setState({
      todos: [...this.state.todos, {
        id: this.lastId++,
        text,
        checked:false
      }],
      currentEdit: false,
      allChecked: false
    });
    //this.addLocal();
  };

  changeItemValue = (id) => {
    //console.log(`Change value of: ${id}`);
    this.setState({ currentEdit: id});
  };

  addChanges = (text) =>{
    this.setState(({todos}) => {
      return { todos: todos.map((todo) => {
          if(this.state.currentEdit === todo.id){
            //console.log(todo.text);
            todo.text = text;
          }
          return {
            ...todo
          }
        }),
        currentEdit: null
      };
    });
  };

  checkItem = (id) => {
    this.setState(({todos}) => {
      return { todos: todos.map((todo) => {
        //console.log(todo);
        if(id === todo.id){
          todo.checked = !todo.checked;
        }
        return {
          ...todo
        }
          //return { ...todo, checked: id === todo.id };
        })};
    });
  };



  filter = (items, currentFilter) => {
    switch (currentFilter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((el) => el.checked === false);
      case 'completed':
        return items.filter((el) => el.checked === true);
      default:
        return items;
    }
  };

  filterChange = (currentFilter) => {
    this.setState({currentFilter});
  };


  toggleAll = () => {
    //const newArr = this.state.allChecked = !this.state.allChecked;
    this.setState(({todos, allChecked}) => {
      return{ todos: todos.map((el)=> {
          el.checked = (this.state.allChecked === false) ? true : false;

        // if(this.state.allChecked === false){
        //   el.checked = true;
        // } else {
        //   el.checked = false;
        // }
          return{
            ...el
          }
        }),
        allChecked: !allChecked
      }
    });
  };

  checkStatusChecked = () => {
    this.setState(({todos}) => {
      return {
         allChecked: todos.every( (el) => el.checked === true)
      }
    });
  };



  render() {
    this.addLocal();

    const visible = this.filter(this.state.todos, this.state.currentFilter);

    //console.log(this.state.todos);
    //console.log('Кнопка Chacked ALL - status: ' + this.state.allChecked);

    const currentTasks = () => {
      const amount = this.state.todos.filter((el) => el.checked === false).length;
      if(amount <= 1){
        return amount + ' item left'
      } else {
        return amount + ' items left'
      }
    };

    const clearAmount = () => {
      const amount = this.state.todos.filter((el) => el.checked === true).length;

      return (amount === 0) ? `clear-completed visibility` : 'clear-completed';
    };



   //console.log(checkStatusChecked());








    return (
      <div>
        <Title/>
        <section className="todo">
          <Header addItem={this.addItem} />
          <Main
            todos={visible}
            currentEdit = {this.state.currentEdit}
            onDestroy={this.deleteItem}
            onChangeLabel={ this.changeItemValue }
            onCheckItem = {this.checkItem}
            onToggleAll = { this.toggleAll }
            toggleStatus = { this.state.allChecked }
            onCheckStatus = { this.checkStatusChecked }
            addChanges = {this.addChanges}
          />
          { this.state.todos.length > 0 &&
            <Footer
              onSize = { currentTasks() }
              onClearCompleted = { this.clearCompleted }
              filter = { this.state.currentFilter }
              onFilterChange = { this.filterChange }
              onVisibleButton = { clearAmount() }
            />
          }
        </section>
      </div>
    );
  }

}


export default App;