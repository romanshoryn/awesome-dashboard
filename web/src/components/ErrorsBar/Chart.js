import React, { Component } from 'react';
import Line from './Line';

class Chart extends Component {
  render() {
    const errorStats = this.props.errorStats;
    const totalCount = errorStats.reduce((res, error) => res + error.count, 0);

    return (
      <div>
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
