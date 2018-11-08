import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import styles from './App.less';
import calculate from '../logic/calculate';
// var styles = require('./App.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    console.log(styles);
  }
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName))
  }
  render() {
    return ( 
      <div className={styles.componentApp}>
        <Display value = {this.state.next || this.state.total || '0'}/>
        <ButtonPanel clickHandler = {this.handleClick}/>
      </div>
    );
  }
}

export default App;
