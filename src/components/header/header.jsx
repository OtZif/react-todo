import React, { Component } from 'react';
import './header.css';



class Header extends Component{

  // addItem = (e) => {
  //   if (this.textInput.value.trim() === '') {
  //     return
  //   }
  //   if(e.key === 'Enter') {
  //     //e.preventDefault();
  //     console.log(this.textInput.value);
  //   }
  // };


  render() {
    const {addItem} = this.props;
    return(
      <header className = "header">
        <input
          type="text"
          className="header--new-task"
          id = "newTask"
          placeholder="What needs to be done?"
          autoFocus
          onKeyUp = { addItem }
          ref={(input) => { this.textInput = input; }}
        />
      </header>
    );
  };
}


export default Header;