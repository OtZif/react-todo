import React from "react";
import "./header.css";

/* DONE TODO Попробуй использовать деструктуризацию параметров функции здесь. https://learn.javascript.ru/destructuring
Получется ({ addItem }). Тоесть ты сразу из props достанешь только то что тебе нужно
И не будет необходимотси вызызвать props.addTiem. Можно будет просто addItem */

const Header = ({ pressEnterButton }) => (
  <header className="header">
    <input
      type="text"
      className="header--new-task"
      id="newTask"
      placeholder="What needs to be done?"
      autoFocus
      /* DONE TODO Вынеси этот обработчик в отдельную фукнкцию над компонентом. А то при каждом
      рендере у тебя новая функцию создается */
      onKeyUp={pressEnterButton}
    />
  </header>
);

export default Header;
