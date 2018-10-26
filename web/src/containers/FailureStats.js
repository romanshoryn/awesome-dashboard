import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import Item from '../components/FailureStats/Item';

class FailureStats extends Component {
  render() {
    const { failureStats } = this.props;

    return (
      <div>
        <Item name='Errors' percentage={failureStats.errors} />
        <Item name='Zeroes' percentage={failureStats.zeroes} />
        <Item name='Timeouts' percentage={failureStats.timeout} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const period = reducers.getStatsPeriodKey(state);

  return {
    failureStats: reducers.getFailuresByPeriod(state, period),
  };
}

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(FailureStats);
