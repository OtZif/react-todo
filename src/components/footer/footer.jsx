import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'completed', label: 'Completed'}
  ];
  render() {
    const {onSize, onClearCompleted, filter, onFilterChange, onVisibleButton} = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'selected' : '';
        return(
          <button
            key = {name}
            className={`control--item  ${clazz} `}
            onClick={ () => onFilterChange(name) }
          >
            {label}
          </button>
        )
    });


    return (
      <footer className='footer'>
        <span>{onSize}</span>
        <div className="control">
          { buttons }
          {/*<button className='control--item selected' onClick={ onFilter }>All</button>*/}
          {/*<button className='control--item' onClick={ onFilter }>Active</button>*/}
          {/*<button className='control--item'>Completed</button>*/}
        </div>
        <button
          className = { onVisibleButton }
          onClick={ onClearCompleted }
        >
          Clear completed
        </button>
      </footer>
    );
  }
}


export default Footer;


