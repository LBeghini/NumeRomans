import RomanNumeralsValues from '../utils/variables';
import {
  assertSetInObject,
  assertCharacterOccurrences,
  convertStringToArray,
} from '../utils/operations';

const isValidRomanNumeral = (characters: string[]) => {
  const validCharacters = assertSetInObject(characters, RomanNumeralsValues);
  const validCharacterQuantity = assertCharacterOccurrences(characters, 3);

  return validCharacters && validCharacterQuantity;
};

const RomanCharacterToArabic = (characters: string[]) => {
  let canSubtract: boolean = true;
  let arabic: number = 0;

  characters.forEach((character, i) => {
    const currentValue = RomanNumeralsValues[character].value;
    const nextValue = RomanNumeralsValues[characters[i + 1]]?.value;
    const belongsToAllowedAssociation = RomanNumeralsValues[character].allowedAssociations.includes(
      characters[i + 1],
    );

    if (currentValue < nextValue) {
      if (canSubtract && belongsToAllowedAssociation) {
        arabic -= currentValue;
        canSubtract = false;
      } else {
        throw new Error('Invalid');
      }
    } else if (currentValue === nextValue) {
      if (belongsToAllowedAssociation) {
        arabic += currentValue;
        canSubtract = false;
      } else {
        throw new Error('Invalid');
      }
    } else {
      arabic += currentValue;
      canSubtract = true;
    }
  });

  return arabic;
};

const RomanConvert = (numeral: string) => {
  const characters = convertStringToArray(numeral);
  if (isValidRomanNumeral(characters)) {
    return RomanCharacterToArabic(characters);
  }
  throw new Error('Invalid character');
};

export default RomanConvert;
