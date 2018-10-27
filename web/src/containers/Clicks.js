import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import styles from '../components/Metrics/Metrics.module.scss';
import Title from '../components/Metrics/Title';
import Metrics from './Metrics';
import { METRIC_TYPES } from '../constants';

class Clicks extends Component {
  render() {
    return (
      <Metrics kind={METRIC_TYPES.clicks}>
        <div className={styles.info}>
          <Title text="CTR: 0,04%" />
          <p>Conversion from searches  to clicks on all devices.</p>
          <p>
            Help: <a href="#ctr">CTR</a>, <a href="#clicks">Clicks</a>
          </p>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Clicks);
