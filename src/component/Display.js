import React from 'react';
import styles from './Display.less';

class Display extends React.Component {
  render () {
    return (
      <div className={styles.componentDisplay}>
        <div>{this.props.value}</div>
      </div>
    )
  }
}
export default Display;