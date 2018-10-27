import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import Metrics from './Metrics';
import Title from '../components/Metrics/Title';
import { METRIC_TYPES } from '../constants';

class Searches extends Component {
  render() {
    return (
      <Metrics kind={METRIC_TYPES.searches}>
        <Title text="Mobile traffic: 100%" />
        <Title text="Web traffic: 100%" />
        <p>You get 100% traffic on mobile and desktop devices.</p>
        <p>
          Help: <a href="#searches">Searches</a>, <a href="#pessimisation">Pessimisation</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Searches);
