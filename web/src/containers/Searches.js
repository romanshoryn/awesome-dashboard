import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import Metrics from './Metrics';
import Title from '../components/Metrics/Title';
import { METRIC_TYPES } from '../constants';
import { formatPercentage } from '../utils';

class Searches extends Component {
  _getDescription() {
    const traffic = this.props.traffic;

    const devices = Object.keys(traffic).reduce((res, kind) => {
      if (parseInt(traffic[kind]) === 100) res.push(kind);
      return res;
    }, []);

    if (!devices.length) return null;

    return <p> You get 100% traffic on {devices.join(' and ')} devices.</p>;
  }

  render() {
    const { web, mobile } = this.props.traffic;

    return (
      <Metrics kind={METRIC_TYPES.searches}>
        <Title text={`Mobile traffic: ${formatPercentage(mobile, 0)}`} />
        <Title text={`Web traffic: ${formatPercentage(web, 0)}`} />
        {this._getDescription()}
        <p>
          Help: <a href="#searches">Searches</a>, <a href="#pessimisation">Pessimisation</a>
        </p>
      </Metrics>
    )
  }
}

const mapStateToProps = (state) => ({
  traffic: reducers.getTrafficMetrics(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Searches);
