import React, { Component } from 'react';
import styles from './ErrorsBar.module.scss';
import Line from './Line';

class Chart extends Component {
  render() {
    const errorStats = this.props.errorStats;
    const totalCount = errorStats.reduce((res, error) => res + error.count, 0);

    return (
      <div className={styles.chart}>
        {
          errorStats.map((error, idx) =>
            <Line key={idx} totalCount={totalCount} code={error.code} count={error.count} />
          )
        }
      </div>
    );
  }
}

export default Chart;
