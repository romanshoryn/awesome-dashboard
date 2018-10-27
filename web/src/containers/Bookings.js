import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import Title from '../components/Metrics/Title';
import Metrics from './Metrics';
import { METRIC_TYPES } from '../constants';

class Bookings extends Component {
  render() {
    return (
      <Metrics kind={METRIC_TYPES.bookings}>
        <Title text="STR: 6.2%" />
        <Title text="Avg. Check: 8 903" />
        <p>Conversion from cliks  to bookings on all devices.</p>
        <p>
          Help:&nbsp;
          <a href="#str">CTSTRR</a>,&nbsp;
          <a href="#bookings">Bookings</a>,&nbsp;
          <a href="#avgcheck">Avg. Check</a>
        </p>
      </Metrics>
    )
  }
}

const mapStateToProps = (state) => {
  const period = reducers.getStatsPeriodKey(state);

  return {
  };
}

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
