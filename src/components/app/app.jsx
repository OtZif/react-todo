import React, { Component } from "react";
import Title from "../title/title";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import "./app.css";

const firstState = {
  /* { id: Number, text: String, checked: Boolean } */
  todos: [],
  currentEdit: null,
  currentFilter: "all",
  allChecked: false,
  lastId: 0
};

class App extends Component {
  constructor(props) {
    super(props);

    const storage = JSON.parse(localStorage.getItem("todo"));

    /* TODO Можешь не объявлять firstState как отдельную перменную наl классом. Ты ее больше нигде
    не используешь. И переменную storage тоже можно не создавать. Можно сразу в конструкторе объявить
    this.state = JSON.parse(localStorage.getItem("todo")) || {
      todos: [],
      currentEdit: null,
      currentFilter: "all",
      allChecked: false,
      lastId: 0
    };
    */

    this.state = storage || firstState;
  }

  addLocal = () => {
    localStorage.setItem("todo", JSON.stringify(this.state));
  };

  deleteItem = id => {
    this.setState(({ todos }) => {
      /* TODO Можно не создавать дополнительную переменную */
      const newArr = todos.filter(el => el.id !== id);

      return {
        todos: newArr,
        /* TODO Зачем здесь проверка на el.checked === false/true?
        el.checked это выражение которое уже возвращает ture или false
        получается двойная проверка */
        allChecked: newArr.every(el => el.checked === true)
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todos }) => {
      /* TODO Зачем здесь проверка на el.checked === false/true?
        el.checked это выражение которое уже возвращает ture или false
        получается двойная проверка */

      /* TODO Можно не создавать доп переменную */
      const newArr = todos.filter(el => el.checked === false);
      return {
        todos: newArr
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
        /* TODO Зачем здесь проверка на el.checked === false/true?
        el.checked это выражение которое уже возвращает ture или false
        получается двойная проверка */
        return items.filter(el => el.checked === false);
      case "completed":
        return items.filter(el => el.checked == true);
      default:
        return items;
    }
  };

  /* TODO Плохое название для метода. Ты по сути устанавливаешь текущий фильтр. Можно
  так и назвать setCurrentFilter или setCurrentFilterType */
  filterChange = currentFilter => {
    this.setState({ currentFilter });
  };

  toggleAll = () => {
    this.setState(({ todos, allChecked }) => {
      return {
        todos: todos.map(el => {
          /* TODO Очень сложно опять записано. Куча лишней логики. All this.state.allChecked возвращает true или fasel
          Всё это можно в одну строчку записать */
          el.checked = this.state.allChecked === false ? true : false;
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

  render() {
    /* TODO addLocal функция создаёт сайд эффект (то что она делает к рендереу вообще никак не относится)
    сохранение в localStorage лучше вынести куда нибудь в другое место */
    this.addLocal();

    const visible = this.filter(this.state.todos, this.state.currentFilter);

    /* TODO Вынеси это в отдельный метод класса */
    const currentTasks = () => {
      /* TODO Зачем здесь проверка на el.checked === false/true?
        el.checked это выражение которое уже возвращает ture или false
        получается двойная проверка. */
      const amount = this.state.todos.filter(el => el.checked === false).length;
      if (amount <= 1) {
        /* TODO Используй интерполяцию, чтобы динамически вычислять значение строки
        https://learn.javascript.ru/es-string#stroki-shablony (раздел шаблонные строки)*/
        return amount + " item left";
      } else {
        return amount + " items left";
      }
    };

    /* TODO Классы которые относятся к Footer лучше определять на уровне компонента Footer
    а в Footer просто прокидывай то что тебе нужно для определени какой нужен класс. Перенеси это определние внутрь Footer */
    const clearAmount = () => {
      /* TODO Зачем здесь проверка на el.checked === false/true?
        el.checked это выражение которое уже возвращает ture или false
        получается двойная проверка. */
      const amount = this.state.todos.filter(el => el.checked === true).length;

      return amount === 0 ? `clear-completed visibility` : "clear-completed";
    };

    return (
      <div>
        <Title />
        <section className="todo">
          <Header addItem={this.addItem} />
          <Main
            todos={visible}
            currentEdit={this.state.currentEdit}
            onDestroy={this.deleteItem}
            /* TODO Назови как нибудь по другому этот пропс чтобы было понятно что ты через него делаешь (устанавливаешь текущий редактируемый элемент) */
            onChangeLabel={this.changeItemValue}
            onCheckItem={this.checkItem}
            /* TODO Назови как нибудь по другому этот пропс. toggle какое то действие подразумевает. Здесь ты просто значение передаёшь */
            toggleStatus={this.state.allChecked}
            onToggleAll={this.toggleAll}
            onCheckStatus={this.checkStatusChecked}
            addChanges={this.addChanges}
          />
          {this.state.todos.length > 0 && (
            <Footer
              /* TODO Назови как нибудь по другому этот пропс. С on начинаютстя названия пропрсов в которых передаются функции*/
              onSize={currentTasks()}
              onClearCompleted={this.clearCompleted}
              filter={this.state.currentFilter}
              onFilterChange={this.filterChange}
              onVisibleButton={clearAmount()}
            />
          )}
        </section>
      </div>
    );
  }
}

export default App;
