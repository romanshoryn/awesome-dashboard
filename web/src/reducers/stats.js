import { FETCH_STATS, FETCH_STATS_SUCCESS, FETCH_STATS_FAILURE } from '../constants';

const initalState = {
  fetching: false,
  error: null,
  data: [{}],
};

const data = (state = initalState, action) => {
  switch(action.type) {
    case FETCH_STATS:
      return { ...state, fetching: true, error: null };
    case FETCH_STATS_SUCCESS:
      return { ...state, ...action.stats, fetching: false, error: null };
    case FETCH_STATS_FAILURE:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
}

export default data;
