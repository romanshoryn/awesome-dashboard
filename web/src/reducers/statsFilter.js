import { SELECT_STATS_PERIOD} from '../constants';

export default (state = {}, action) => {
  switch(action.type) {
    case SELECT_STATS_PERIOD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
