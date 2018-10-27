export * from './actionTypes';

export const STATS_PERIODS = {
  'Last hour': 'last_hour',
  'Today': 'today',
  'Yesterday': 'yesterday',
  'Last 3 days': 'last_3days',
};

export const METRIC_TYPES = {
  bookings: 'Bookings',
  searches: 'Searches',
  clicks: 'Clicks',
}

export const DEFAULT_STATS_PERIOD = Object.keys(STATS_PERIODS)[0];
export const SEARCH_METRIC_TYPE = 'search';
