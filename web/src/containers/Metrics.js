import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import Title from '../components/Metrics/Title';
import PrimaryNumber from '../components/Metrics/PrimaryNumber';
import styles from '../components/Metrics/Metrics.module.scss';
import * as Badges from '../components/Metrics/Badges.js';

class Metrics extends Component {
  render() {
    const { mainMetrics, kind } = this.props;
    const { current, previous, growth } = mainMetrics;
    const Badge = Badges[kind];

    return (
      <div className={styles.metrics}>
        <div className={styles.badge}>
          <Badge className={styles.badge} positive={growth > 0} />
        </div>
        <div className={styles.main}>
          <Title text={kind} growth={growth} />
          <PrimaryNumber text="Yesterday" number={current} />
          <PrimaryNumber text="Last Friday" number={previous} prev={true} />
        </div>

        <div className={styles.info}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const kind = ownProps.kind;
  const period = reducers.getStatsPeriodKey(state);

  return {
    mainMetrics: reducers.getMainMetricByPeriod(state, kind, period),
  };
}

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Metrics);
