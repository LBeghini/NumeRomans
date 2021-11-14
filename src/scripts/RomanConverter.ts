import RomanNumeralsValues from '../utils/variables';

const isRomanCharacter = (characters: string[]) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  characters.every((key) => Object.keys(RomanNumeralsValues).includes(key));

const convertStringToArray = (str: string) => str.split('');

const RomanConvert = (numeral: string) => {
  let arabic = 0;
  const characters = convertStringToArray(numeral);
  if (isRomanCharacter(characters)) {
    characters.forEach((character, i) => {
      const currentValue = RomanNumeralsValues[character];
      const nextValue = RomanNumeralsValues[numeral[i + 1]];
      if (currentValue < nextValue) {
        arabic -= currentValue;
      } else {
        arabic += currentValue;
      }
    });
  } else {
    throw new Error('Invalid character');
  }
  return arabic;
};

export default RomanConvert;
