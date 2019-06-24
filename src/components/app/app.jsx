import React, { Component } from "react";
import Title from "../title/title";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse(localStorage.getItem("todo")) || {
      todos: [],
      currentEdit: null,
      currentFilter: "all",
      allChecked: false,
      lastId: 0
    };
  }

  addLocal = () => {
    localStorage.setItem("todo", JSON.stringify(this.state));
  };

  deleteItem = id => {
    this.setState(({ todos }) => {
      /* ----- ? ------ TODO Можно не создавать дополнительную переменную */
      const newArr = todos.filter(el => el.id !== id);

      return {
        todos: newArr,
        allChecked: newArr.every(el => el.checked)
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter(el => !el.checked)
      };
    });
  };

  addItem = text => {
    const newId = this.state.lastId + 1;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: newId,
          text,
          checked: false
        }
      ],
      lastId: newId,
      currentEdit: false,
      allChecked: false
    });
  };

  changeItemValue = id => {
    this.setState({ currentEdit: id });
  };

  addChanges = text => {
    this.setState(({ todos }) => {
      return {
        todos: todos.map(todo => {
          if (this.state.currentEdit === todo.id) {
            todo.text = text;
          }
          return {
            ...todo
          };
        }),
        currentEdit: null
      };
    });
  };

  checkItem = id => {
    this.setState(({ todos }) => {
      return {
        todos: todos.map(todo => {
          if (id === todo.id) {
            todo.checked = !todo.checked;
          }
          return {
            ...todo
          };
        })
      };
    });
  };

  filter = (items, currentFilter) => {
    switch (currentFilter) {
      case "all":
        return items;
      case "active":
        return items.filter(el => !el.checked);
      case "completed":
        return items.filter(el => el.checked);
      default:
        return items;
    }
  };


  setCurrentFilter = currentFilter => {
    this.setState({ currentFilter });
  };

  toggleAll = () => {
    this.setState(({ todos, allChecked }) => {
      return {
        todos: todos.map(el => {
          el.checked = !this.state.allChecked;
          return {
            ...el
          };
        }),
        allChecked: !allChecked
      };
    });
  };

  checkStatusChecked = () => {
    this.setState(({ todos }) => {
      return {
        allChecked: todos.every(el => el.checked === true)
      };
    });
  };

  pressEnterButton = e => {
    if (e.keyCode === 13) {
      if (e.target.value.trim() === "") {
        return (e.target.value = "");
      } else {
        this.addItem(e.target.value);
        e.target.value = "";
      }
    }
  };

  pressEnterForEdit = e => {
    if (e.keyCode === 13) {
      if (e.target.value.trim() === "") {
        return this.deleteItem();
      }
      return this.addChanges(e.target.value);
    }
  };

  currentTasks = () => {
    const amount = this.state.todos.filter(el => !el.checked).length;
    if (amount <= 1) {
      return `${amount} item left`;
    } else {
      return `${amount} items left`;
    }
  };

  render() {
    /* TODO addLocal функция создаёт сайд эффект (то что она делает к рендереу вообще никак не относится)
    сохранение в localStorage лучше вынести куда нибудь в другое место */
    this.addLocal();

    const visible = this.filter(this.state.todos, this.state.currentFilter);



    return (
      <div>
        <Title />
        <section className="todo">
          <Header pressEnterButton={this.pressEnterButton} />
          <Main
            todos={visible}
            currentEdit={this.state.currentEdit}
            onDestroy={this.deleteItem}
            onChangeItemValue={this.changeItemValue}
            onCheckItem={this.checkItem}
            tumblerStatus={this.state.allChecked}
            onToggleAll={this.toggleAll}
            onCheckStatus={this.checkStatusChecked}
            pressEnterForEdit={this.pressEnterForEdit}
            // addChanges={this.addChanges}
          />
          {this.state.todos.length > 0 && (
            <Footer
              state={this.state.todos}
              tasksAmount={this.currentTasks()}
              onClearCompleted={this.clearCompleted}
              filter={this.state.currentFilter}
              onFilterChange={this.setCurrentFilter}
            />
          )}
        </section>
      </div>
    );
  }
}

export default App;
