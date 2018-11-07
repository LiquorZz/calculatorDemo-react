import React from 'react';
import styles from './Button.css';

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }
  render () {
    const styleName = [
      styles.componentButton,
      this.props.orange ? styles.orange : "",
      this.props.wide ? styles.wide : "",
    ];

    return (
      <div className={styleName.join(" ").trim}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    )
  }
}
export default Button;