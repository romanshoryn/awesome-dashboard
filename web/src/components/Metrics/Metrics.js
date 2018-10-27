import React, { Component } from 'react';
import styles from './Metrics.module.scss';

class Metrics extends Component {
  render() {
    return (
      <div className={styles.metrics}>
        <div className={styles.badge}>{this.props.badge}</div>
        {this.props.children}
      </div>
    )
  }
}

export default Metrics;
