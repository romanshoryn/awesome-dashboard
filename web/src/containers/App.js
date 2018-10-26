import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as actions from '../actions';
import styles from './App.module.scss';
import FailureStats from './FailureStats';
import StatsPeriodSelector from './StatsPeriodSelector';
import ErrorsBar from './ErrorsBar';

class App extends Component  {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles['app__title']}>Main metrics</div>
        <StatsPeriodSelector />
        <FailureStats />
        <ErrorsBar />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(actions.fetchStats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
