export const characterCounting = (characters: string[]) => Object.values(
  characters.reduce((previousValue: { [c: string]: number }, currentValue: string) => {
    const temp = previousValue;
    if (temp[currentValue]) {
      temp[currentValue] += 1;
    } else {
      temp[currentValue] = 1;
    }
    return previousValue;
  }, {}),
);

export const convertStringToArray = (str: string) => str.split('');

export const assertItemInSet = (item: string, set: string[]) => set.includes(item);

export const assertCharacterOccurrences = (
  characters: string[],
  limit: number,
  except: string[],
) => {
  const list = characterCounting(characters).filter((quantity, i) => {
    if (quantity <= limit || assertItemInSet(characters[i], except)) {
      return false;
    }
    return true;
  });
  return list.length === 0;
};

export const assertSetInObject = (set: string[], object: Object) => set.every(
  (key) => Object.keys(object).includes(key),
);

export const assertCharacterSequency = (characters: string[], limit: number) => {
  let compare = '';
  let sum = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (characters[index] !== compare) {
      compare = characters[index];
      sum = 1;
    } else {
      sum += 1;
    }

    if (sum > limit) {
      return false;
    }
  }

  return true;
};

export const assertNumberRange = (
  numeral: number,
  minLimit: number,
  maxLimit: number,
) => !(numeral < minLimit || numeral > maxLimit);
