import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import * as reducers from '../reducers';
import styles from '../components/Metrics/Metrics.module.scss';
import Title from '../components/Metrics/Title';
import Metrics from '../components/Metrics/Metrics';
import PrimaryNumber from '../components/Metrics/PrimaryNumber';
import { BookingsBadge } from '../components/Metrics/Badges';

class Bookings extends Component {
  render() {
    return (
      <Metrics badge={<BookingsBadge />}>
        <div className={styles.main}>
          <Title text="Bookings" />
          <PrimaryNumber text="Yesterday" number={243} />
          <PrimaryNumber text="Last Friday" number={280} prev={true} />
        </div>

        <div className={styles.info}>
          <Title text="STR: 6.2%" />
          <Title text="Avg. Check: 8 903" />
          <p>Conversion from cliks  to bookings on all devices.</p>
          <p>
            Help:&nbsp;
            <a href="#str">CTSTRR</a>,&nbsp;
            <a href="#bookings">Bookings</a>,&nbsp;
            <a href="#avgcheck">Avg. Check</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
