import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import styles from '../components/Metrics/Metrics.module.scss';
import Title from '../components/Metrics/Title';
import PrimaryNumber from '../components/Metrics/PrimaryNumber';
import Metrics from '../components/Metrics/Metrics';
import { ClicksBadge } from '../components/Metrics/Badges';

class Clicks extends Component {
  render() {
    return (
      <Metrics badge={<ClicksBadge positive={-13 > 0} />}>
        <div className={styles.main}>
          <Title text="Clicks" diff={-13} />
          <PrimaryNumber text="Yesterday" number={243} />
          <PrimaryNumber text="Last Friday" number={280} prev={true} />
        </div>

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
