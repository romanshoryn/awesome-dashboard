import { SELECT_STATS_PERIOD, DEFAULT_STATS_PERIOD } from '../constants';

export default (state = { period: DEFAULT_STATS_PERIOD }, action) => {
  switch(action.type) {
    case SELECT_STATS_PERIOD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
