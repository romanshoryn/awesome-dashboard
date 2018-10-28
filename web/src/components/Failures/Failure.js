import React, { Component } from 'react';
import styles from './Failures.module.scss';
import { formatPercentage } from '../../utils';

class Failure extends Component {
  render() {
    return (
      <div className={styles.failure}>
        <div className={styles.content}>
          <div className={styles.circle}></div>
          <div className={styles.text}>
            <div className={styles.title}>
              {this.props.name}: {formatPercentage(this.props.percentage, 2, null, ', ')}
            </div>
            <div className={styles.subTitle}>Average: 0.11%</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Failure;
