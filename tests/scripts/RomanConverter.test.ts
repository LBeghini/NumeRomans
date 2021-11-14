import RomanConvert from '../../src/scripts/RomanConverter';

describe('Roman Numeral Converter', () => {
  it('should convert basic roman number ', () => {
    expect(RomanConvert('I')).toBe(1);
    expect(RomanConvert('V')).toBe(5);
    expect(RomanConvert('X')).toBe(10);
    expect(RomanConvert('L')).toBe(50);
    expect(RomanConvert('C')).toBe(100);
    expect(RomanConvert('D')).toBe(500);
    expect(RomanConvert('M')).toBe(1000);
  });

  it('should convert roman number with growing characters', () => {
    expect(RomanConvert('XVII')).toBe(17);
  });

  it('should convert roman number with decreasing characters', () => {
    expect(RomanConvert('CDXLIV')).toBe(444);
    expect(RomanConvert('CMXCIX')).toBe(999);
  });

  it('should fail convert number with weird characters', () => {
    expect(() => RomanConvert('QA:SZ')).toThrow(Error);
  });
});
