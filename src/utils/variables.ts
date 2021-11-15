const RomanNumeralsValues: { [roman: string]: { value: number; allowedAssociations: string[] } } = {
  I: {
    value: 1,
    allowedAssociations: ['I', 'V', 'X'],
  },
  V: {
    value: 5,
    allowedAssociations: [],
  },
  X: {
    value: 10,
    allowedAssociations: ['X', 'L', 'C'],
  },
  L: {
    value: 50,
    allowedAssociations: [],
  },
  C: {
    value: 100,
    allowedAssociations: ['C', 'D', 'M'],
  },
  D: {
    value: 500,
    allowedAssociations: [],
  },
  M: {
    value: 1000,
    allowedAssociations: ['M'],
  },
};

export default RomanNumeralsValues;
