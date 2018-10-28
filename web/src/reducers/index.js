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
  const metricType = metric.toLowerCase();

  const current = data[`${metricType}_current_${period}`];
  const previous = data[`${metricType}_previous_${period}`];

  return {
    current,
    previous,
    growth: getGrowthPercentage(current, previous),
  };
};

export const getMetricByPeriod = (state, metric, period) => 
  getStatsData(state)[`${metric}_${period}`];

export const getTrafficMetrics = (state) => {
  const data = getStatsData(state);

  return {
    mobile: data['mobile_pessimizer'],
    web: data['web_pessimizer'],
  }
};
