import stats from './stats';
import statsFilter from './statsFilter';
import { STATS_PERIODS } from '../constants';

export default {
  stats,
  statsFilter,
};

export const getStatsPeriod = (state) => state.statsFilter.period;
export const getStatsPeriodKey = (state) => STATS_PERIODS[state.statsFilter.period];
export const getErrorsByPeriod = (state, period) => state.stats[`errors_${period}`];
export const getFailuresByPeriod = (state, period) => ({
  errors: state.stats.data[0][`errors_${period}`],
  zeroes: state.stats.data[0][`zeroes_${period}`],
  timeout: state.stats.data[0][`timeout_${period}`],
});
