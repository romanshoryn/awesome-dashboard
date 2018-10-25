import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import FailureStatsItem from '../components/FailureStats/FailureStatsItem';

class FailureStats extends Component {
  render() {
    const { failureStats } = this.props;

    console.log(failureStats);
    return (
      <div>
        <FailureStatsItem name='Errors' percentage={failureStats.errors} />
        <FailureStatsItem name='Zeroes' percentage={failureStats.zeroes} />
        <FailureStatsItem name='Timeouts' percentage={failureStats.timeout} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const period = reducers.getStatsPeriodKey(state);

  return {
    errorStats: reducers.getErrorsByPeriod(state, period),
    failureStats: reducers.getFailuresByPeriod(state, period),
  };
}

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(FailureStats);
