import React, { Component } from 'react';
import accounting from 'accounting';
import styles from './Failures.module.scss';

class Failure extends Component {
  render() {
    return (
      <div className={styles.failureStatsItem}>
        <div className={styles.content}>
          <div className={styles.circle}></div>
          <div className={styles.text}>
            <div className={styles.title}>
              {this.props.name}: {accounting.formatNumber(this.props.percentage, 2, ',')}%
            </div>
            <div className={styles.subTitle}>Average: 0.11%</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Failure;
