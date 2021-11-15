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

export const assertCharacterOccurrences = (characters: string[], limit: number) => {
  const list = characterCounting(characters).filter((quantity) => {
    if (quantity <= limit) {
      return false;
    }
    return true;
  });
  return list.length === 0;
};

export const assertSetInObject = (set: string[], object: Object) => set.every(
  (key) => Object.keys(object).includes(key),
);
