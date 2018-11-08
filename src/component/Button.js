import React from 'react';
import styles from './Button.less';
// import classnames from "classnames";
require("./Button.less");

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }
  render () {
    const className = [
      styles.componentButton,
      this.props.orange ? styles.orange : "",
      this.props.wide ? styles.wide : "",
    ];
    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    )
  }
}
export default Button;