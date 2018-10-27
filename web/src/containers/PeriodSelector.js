import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import styles from '../components/PeriodSelector/PeriodSelector.module.scss';
import Option from '../components/PeriodSelector/Option';
import * as reducers from '../reducers';
import * as actions from '../actions';
import { STATS_PERIODS } from '../constants';

class StatsPeriodSelector extends Component {
  render() {
    const { selectStatsPeriod, currentStatsPeriod } = this.props;

    return (
      <div className={styles.periodSelector}>
        {
          Object.keys(STATS_PERIODS).map((name, idx) =>
            <Option
              name={name}
              selected={name === currentStatsPeriod}
              key={idx}
              selectStatsPeriod={selectStatsPeriod}
            />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentStatsPeriod: reducers.getStatsPeriod(state),
});

const mapDispatchToProps = (dispatch) => ({
  selectStatsPeriod: (period) => dispatch(actions.selectStatsPeriod(period)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsPeriodSelector);

