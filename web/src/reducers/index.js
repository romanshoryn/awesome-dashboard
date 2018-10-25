import stats from './stats';
import statsFilter from './statsFilter';
import { getPeriod } from './statsFilter';

export default {
  stats,
  statsFilter,
};

export const getStatsPeriod = (state) => getPeriod(state.statsFilter);
