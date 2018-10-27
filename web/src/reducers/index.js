import stats from './stats';
import statsFilter from './statsFilter';
import { STATS_PERIODS } from '../constants';
import { getGrowthPercentage } from '../utils';

export default {
  stats,
  statsFilter,
};

export const getStatsPeriod = (state) => state.statsFilter.period;
export const getStatsPeriodKey = (state) => STATS_PERIODS[state.statsFilter.period];
export const getErrorsByPeriod = (state, period) =>
  (state.stats[`errors_${period}`] || []).sort((a) => !a.code);

export const getStatsData = (state) => state.stats.data[0] || {};

export const getFailuresByPeriod = (state, period) => {
  const data = getStatsData(state);

  return {
    errors: data[`errors_${period}`],
    zeroes: data[`zeroes_${period}`],
    timeout: data[`timeout_${period}`],
  }
};

export const getMainMetricByPeriod = (state, metric, period) => {
  const data = getStatsData(state);

  const current = data[`${metric}_current_${period}`];
  const previous = data[`${metric}_previous_${period}`];

  return {
    current,
    previous,
    growth: getGrowthPercentage(current, previous),
  };
};
