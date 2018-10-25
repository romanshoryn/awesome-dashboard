import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import * as actions from '../actions';
import styles from './App.module.scss';
import StatsPeriodPanel from '../components/statsPeriodPanel/StatsPeriodPanel';

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
        <StatsPeriodPanel
          selectStatsPeriod={selectStatsPeriod}
          currentStatsPeriod={currentStatsPeriod}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentStatsPeriod: reducers.getStatsPeriod(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(actions.fetchStats()),
  selectStatsPeriod: (period) => dispatch(actions.selectStatsPeriod(period)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
