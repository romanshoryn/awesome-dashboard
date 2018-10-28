import moment from 'moment';
import accounting from 'accounting';
import {
  LAST_HOUR,
  TODAY,
  YESTERDAY,
  LAST_3_DAYS,
  MISSING_DATA_SIGN
} from '../constants';

export const numberToHexColor = (number) => {
  if (!number) return null;

  const hex = Math.floor(`0.${number}` * 16777215).toString(16);
  return `#${hex}`;
};

export const numberToPercentageRatio = (number, total) =>
  `${(number * 100) / total}%`;

export const getGrowthPercentage = (number1, number2) =>
  Math.round((number1 - number2) / number2 * 100);

export const getPreviousPeriod = (period) => {
  let timestamp = '';

  switch(period) {
    case TODAY:
      timestamp = `Last ${moment().subtract(7, 'd').format('dddd')}`;
      break;
    case YESTERDAY:
      timestamp = `Last ${moment().subtract(8, 'd').format('dddd')}`;
      break;
    case LAST_HOUR:
      timestamp = 'Previous hour';
      break;
    case LAST_3_DAYS:
      const startDay = moment().subtract(6, 'd').format('dddd');
      const endDay = moment().subtract(3, 'd').format('dddd');

      timestamp = `${startDay} - ${endDay}`
      break;
  }

  return timestamp;
};

export const formatNumber = (number, ...args) => {
  if (number === undefined) {
    return MISSING_DATA_SIGN;
  }

  return (
    args.length ?
      accounting.formatNumber(number, ...args) :
      accounting.formatNumber(number, 0, ' ')
  );
};

export const formatPercentage = (number, ...args) => {
  const formatted =
    args.length ?
      formatNumber(number, ...args) :
      formatNumber(number, 2, null, ',');

  return (formatted === MISSING_DATA_SIGN) ? formatted : `${formatted}%`; 
};
