export * from './actionTypes';

export const LAST_HOUR = 'Last hour';
export const TODAY = 'Today';
export const YESTERDAY = 'Yesterday'
export const LAST_3_DAYS = 'Last 3 days';

export const STATS_PERIODS = {
  [LAST_HOUR]: 'last_hour',
  [TODAY]: 'today',
  [YESTERDAY]: 'yesterday',
  [LAST_3_DAYS]: 'last_3days',
};

export const METRIC_TYPES = {
  bookings: 'Bookings',
  searches: 'Searches',
  clicks: 'Clicks',
}

export const DEFAULT_STATS_PERIOD = Object.keys(STATS_PERIODS)[2];

export const MISSING_DATA_SIGN = 'N/A';
