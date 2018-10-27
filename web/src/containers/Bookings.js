import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import accounting from 'accounting';
import * as reducers from '../reducers';
import Title from '../components/Metrics/Title';
import Metrics from './Metrics';
import { METRIC_TYPES } from '../constants';

class Bookings extends Component {
  render() {
    const formattedStr = accounting.formatNumber(this.props.str, 2);
    const formattedAvg = accounting.formatNumber(this.props.avg, 0, ' ');

    return (
      <Metrics kind={METRIC_TYPES.bookings}>
        <Title text={`STR: ${formattedStr}%`} />
        <Title text={`Avg. Check: ${formattedAvg}`} />
        <p>Conversion from cliks  to bookings on all devices.</p>
        <p>
          Help:&nbsp;
          <a href="#str">STR</a>,&nbsp;
          <a href="#bookings">Bookings</a>,&nbsp;
          <a href="#avgcheck">Avg. Check</a>
        </p>
      </Metrics>
    )
  }
}

const mapStateToProps = (state) => {
  const periodKey = reducers.getStatsPeriodKey(state);

  return {
    str: reducers.getMetricByPeriod(state, 'str', periodKey),
    avg: reducers.getMetricByPeriod(state, 'avg_price', periodKey),
  };
}

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
