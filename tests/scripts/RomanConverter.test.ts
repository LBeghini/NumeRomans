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
    expect(RomanConvert('XVIII')).toBe(18);
  });

  it('should convert roman number with decreasing characters', () => {
    expect(RomanConvert('CDXLIV')).toBe(444);
    expect(RomanConvert('CMXCIX')).toBe(999);
  });

  it('should convert biggest roman number', () => {
    expect(RomanConvert('MMMCMXCIX')).toBe(3999);
  });

  it('should fail roman number with more than three equal characters', () => {
    expect(() => RomanConvert('CCXXCC')).toThrow(Error);
  });

  it('should fail convert roman number with many decreasing character', () => {
    expect(() => RomanConvert('IIIV')).toThrow(Error);
    expect(() => RomanConvert('IIV')).toThrow(Error);
    expect(() => RomanConvert('XXC')).toThrow(Error);
    expect(() => RomanConvert('XXXL')).toThrow(Error);
  });

  it('should fail convert number with characters with diferent basis', () => {
    expect(() => RomanConvert('IL')).toThrow(Error);
    expect(() => RomanConvert('IC')).toThrow(Error);
    expect(() => RomanConvert('ID')).toThrow(Error);
    expect(() => RomanConvert('IM')).toThrow(Error);
    expect(() => RomanConvert('XD')).toThrow(Error);
    expect(() => RomanConvert('XM')).toThrow(Error);
  });

  it('should fail convert number with weird characters', () => {
    expect(() => RomanConvert('QA:SZ')).toThrow(Error);
  });

  it('should fail specific sequential characters', () => {
    expect(() => RomanConvert('VVV')).toThrow(Error);
    expect(() => RomanConvert('LLL')).toThrow(Error);
    expect(() => RomanConvert('DDD')).toThrow(Error);
    expect(() => RomanConvert('MMMM')).toThrow(Error);
  });
});
