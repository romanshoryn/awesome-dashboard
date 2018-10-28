import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import Title from '../components/Metrics/Title';
import Metrics from './Metrics';
import { METRIC_TYPES } from '../constants';
import { formatPercentage } from '../utils';

class Clicks extends Component {
  render() {
    return (
      <Metrics kind={METRIC_TYPES.clicks}>
        <Title text={`CTR: ${formatPercentage(this.props.ctr)}`} />
        <p>Conversion from searches to clicks on all devices.</p>
        <p>
          Help: <a href="#ctr">CTR</a>, <a href="#clicks">Clicks</a>
        </p>
      </Metrics>
    )
  }
}

const mapStateToProps = (state) => {
  const periodKey = reducers.getStatsPeriodKey(state);

  return {
    ctr: reducers.getMetricByPeriod(state, 'ctr', periodKey),
  };
}

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Clicks);
