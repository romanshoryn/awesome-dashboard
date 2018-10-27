import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import Failure from '../components/Failures/Failure';

class FailureStats extends Component {
  render() {
    const { failureStats } = this.props;

    return (
      <div>
        <Failure name='Errors' percentage={failureStats.errors} />
        <Failure name='Zeroes' percentage={failureStats.zeroes} />
        <Failure name='Timeouts' percentage={failureStats.timeout} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const periodKey = reducers.getStatsPeriodKey(state);

  return {
    failureStats: reducers.getFailuresByPeriod(state, periodKey),
  };
}

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(FailureStats);
