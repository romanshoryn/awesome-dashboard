import React, { Component } from 'react';
import styles from './StatsPeriodPanel.module.scss';
import StatsPeriodPanelItem from './StatsPeriodPanelItem';
import { STATS_PERIODS } from '../../constants';

class StatsPeriodPanel extends Component {
  render() {
    const { selectStatsPeriod, currentStatsPeriod } = this.props;

    return (
      <div className={styles.switchPanel}>
        {
          Object.values(STATS_PERIODS).map((name, idx) =>
            <StatsPeriodPanelItem
              name={name}
              selected={name === currentStatsPeriod}
              key={idx}
              onItemSelect={selectStatsPeriod}
            />
          )
        }
      </div>
    );
  }
}

export default StatsPeriodPanel;
