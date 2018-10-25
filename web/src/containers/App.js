import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import * as actions from '../actions';
import styles from './App.module.scss';
import FailureStats from './FailureStats';
import StatsPeriodSelector from '../components/statsPeriodSelector/StatsPeriodSelector';

class App extends Component  {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const {
      selectStatsPeriod,
      currentStatsPeriod,
    } = this.props;

    return (
      <div className={styles.app}>
        <div className={styles['app__title']}>Main metrics</div>
        <StatsPeriodSelector
          selectStatsPeriod={selectStatsPeriod}
          currentStatsPeriod={currentStatsPeriod}
        />
        <FailureStats />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentStatsPeriod: reducers.getStatsPeriod(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(actions.fetchStats()),
  selectStatsPeriod: (period) => dispatch(actions.selectStatsPeriod(period)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
