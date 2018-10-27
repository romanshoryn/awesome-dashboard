export const numberToHexColor = (number) => {
  if (!number) return null;

  const hex = Math.floor(`0.${number}` * 16777215).toString(16);
  return `#${hex}`;
};

export const numberToPercentageRatio = (number, total) =>
  `${(number * 100) / total}%`;

export const getGrowthPercentage = (number1, number2) =>
  Math.round((number1 - number2) / number2 * 100);
