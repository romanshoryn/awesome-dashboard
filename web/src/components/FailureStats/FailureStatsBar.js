import React, { Component } from 'react';
import styles from './FailureStatsPanel.module.scss';

class FailureStatsBar extends Component {
  render() {
    return (
      <div className={styles.failureItem}>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default FailureItem;
