import { SELECT_STATS_PERIOD } from '../constants';

export const selectStatsPeriod = (period) => ({
  type: SELECT_STATS_PERIOD,
  payload: { period },
});
