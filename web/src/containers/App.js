import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import { fetchStats } from '../actions';
import styles from './App.module.scss';

class App extends Component  {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles['app__title']}>Main metrics</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchStats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
