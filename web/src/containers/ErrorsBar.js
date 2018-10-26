import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import styles from '../components/ErrorsBar/ErrorsBar.module.scss';
import Chart from '../components/ErrorsBar/Chart';
import Sign from '../components/ErrorsBar/Sign';

class ErrorsBar extends Component {
  render() {
    const { errorStats } = this.props;

    return (
      <div className={styles.errorsBar}>
        <Chart errorStats={errorStats} />
        <Sign errorStats={errorStats} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const period = reducers.getStatsPeriodKey(state);

  return {
    errorStats: reducers.getErrorsByPeriod(state, period),
  };
}

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsBar);
