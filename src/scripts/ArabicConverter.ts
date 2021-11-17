import RomanNumeralsValues from '../utils/variables';
import { assertNumberRange } from '../utils/operations';

const isValidArabiciNumeral = (numeral: number) => {
  const validRange = assertNumberRange(numeral, 1, 3999);

  return validRange;
};

const ArabiciteratoreralToRomanCharacter = (numeral: number) => {
  let iterator = numeral;
  let roman = '';
  const romanValues = Object.values(RomanNumeralsValues);
  const romanKeys = Object.keys(RomanNumeralsValues);
  let i = romanValues.length - 1;

  while (iterator !== 0) {
    if (iterator >= romanValues[i].value) {
      roman += romanKeys[i];
      iterator -= romanValues[i].value;
    } else {
      i -= 1;
    }
  }
  return roman;
};

const ArabicConvert = (numeral: number) => {
  if (isValidArabiciNumeral(numeral)) {
    return ArabiciteratoreralToRomanCharacter(numeral);
  }
  throw new Error('Invalid numeral');
};

export default ArabicConvert;
