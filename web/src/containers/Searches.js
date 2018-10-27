import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import styles from '../components/Metrics/Metrics.module.scss';
import Title from '../components/Metrics/Title';
import Metrics from '../components/Metrics/Metrics';
import PrimaryNumber from '../components/Metrics/PrimaryNumber';
import { SearchesBadge } from '../components/Metrics/Badges';

class Searches extends Component {
  render() {
    const { mainMetrics } = this.props;
    const { current, previous, growth } = mainMetrics;

    return (
      <Metrics badge={<SearchesBadge positive={growth > 0} />}>
        <div className={styles.main}>
          <Title text="Searches" growth={growth} />
          <PrimaryNumber text="Yesterday" number={current} />
          <PrimaryNumber text="Last Friday" number={previous} prev={true} />
        </div>

        <div className={styles.info}>
          <Title text="Mobile traffic: 100%" />
          <Title text="Web traffic: 100%" />
          <p>You get 100% traffic on mobile and desktop devices.</p>
          <p>
            Help: <a href="#searches">Searches</a>, <a href="#pessimisation">Pessimisation</a>
          </p>
        </div>
      </Metrics>
    )
  }
}

const mapStateToProps = (state) => {
  const period = reducers.getStatsPeriodKey(state);

  return {
    mainMetrics: reducers.getMainMetricByPeriod(state, 'searches', period),
  };
}

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Searches);
