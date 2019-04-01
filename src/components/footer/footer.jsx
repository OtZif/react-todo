import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    function size() {
      const count = 1;
      return `${count} item left`;
    }

    return (
      <footer className='footer'>
        <span id='ssds'>{size()}</span>
        <div className="control">
          <button className='control--item selected' id="filter-all">All</button>
          <button className='control--item' id="filter-active">Active</button>
          <button className='control--item' id="filter-completed">Completed</button>
        </div>
        <button className="clear-completed" id="clearCompleted">Clear completed</button>
      </footer>
    );
  }
}


export default Footer;


