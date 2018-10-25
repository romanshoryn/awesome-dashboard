import React, { Component } from 'react';
import styles from './StatsPeriodSelector.module.scss';
import StatsPeriodSelectorItem from './StatsPeriodSelectorItem';
import { STATS_PERIODS } from '../../constants';

class StatsPeriodSelector extends Component {
  render() {
    const { selectStatsPeriod, currentStatsPeriod } = this.props;

    return (
      <div className={styles.switchPanel}>
        {
          Object.keys(STATS_PERIODS).map((name, idx) =>
            <StatsPeriodSelectorItem
              name={name}
              selected={name === currentStatsPeriod}
              key={idx}
              selectStatsPeriod={selectStatsPeriod}
            />
          )
        }
      </div>
    );
  }
}

export default StatsPeriodSelector;
