import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as actions from '../actions';
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
      <React.Fragment>
        <h2>Main metrics</h2>
        <PeriodSelector />
        <Failures />
        <ErrorsBar />
        <Searches />
        <Clicks />
        <Bookings />
      </React.Fragment>
    )
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(actions.fetchStats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
