import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as actions from '../actions';
import styles from './App.module.scss';
import Failures from './Failures';
import PeriodSelector from './PeriodSelector';
import ErrorsBar from './ErrorsBar';
import Searches from './Searches';
import Clicks from './Clicks';
import Bookings from './Bookings';

class App extends Component  {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles['app__title']}>Main metrics</div>
        <PeriodSelector />
        <Failures />
        <ErrorsBar />
        <Searches />
        <Clicks />
        <Bookings />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(actions.fetchStats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
