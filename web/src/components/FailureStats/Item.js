import React, { Component } from 'react';
import numeral from 'numeral';
import styles from './FailureStats.module.scss';

class Item extends Component {
  render() {
    return (
      <div className={styles.failureStatsItem}>
        <div className={styles.content}>
          <div className={styles.circle}></div>
          <div className={styles.text}>
            <div className={styles.title}>
              {this.props.name}: {numeral(this.props.percentage).format('0.00')}%
            </div>
            <div className={styles.subTitle}>Average: 0.11%</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
