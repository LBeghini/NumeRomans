const RomanNumeralsValues: { [roman: string]: { value: number; allowedAssociations: string[] } } = {
  I: {
    value: 1,
    allowedAssociations: ['I', 'V', 'X'],
  },
  IV: {
    value: 4,
    allowedAssociations: [],
  },
  V: {
    value: 5,
    allowedAssociations: [],
  },
  IX: {
    value: 9,
    allowedAssociations: [],
  },
  X: {
    value: 10,
    allowedAssociations: ['X', 'L', 'C'],
  },
  XL: {
    value: 40,
    allowedAssociations: [],
  },
  L: {
    value: 50,
    allowedAssociations: [],
  },
  XC: {
    value: 90,
    allowedAssociations: [],
  },
  C: {
    value: 100,
    allowedAssociations: ['C', 'D', 'M'],
  },
  CD: {
    value: 400,
    allowedAssociations: [],
  },
  D: {
    value: 500,
    allowedAssociations: [],
  },
  CM: {
    value: 900,
    allowedAssociations: [],
  },
  M: {
    value: 1000,
    allowedAssociations: ['M'],
  },
};

export default RomanNumeralsValues;
