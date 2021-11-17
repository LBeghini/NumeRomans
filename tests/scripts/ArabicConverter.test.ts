import ArabicConvert from '../../src/scripts/ArabicConverter';

describe('arabic Numeral Converter', () => {
  it('should convert basic arabic number ', () => {
    expect(ArabicConvert(1)).toBe('I');
    expect(ArabicConvert(5)).toBe('V');
    expect(ArabicConvert(10)).toBe('X');
    expect(ArabicConvert(50)).toBe('L');
    expect(ArabicConvert(100)).toBe('C');
    expect(ArabicConvert(500)).toBe('D');
    expect(ArabicConvert(1000)).toBe('M');
  });

  it('should convert complex arabic number ', () => {
    expect(ArabicConvert(3000)).toBe('MMM');
    expect(ArabicConvert(3627)).toBe('MMMDCXXVII');
    expect(ArabicConvert(2732)).toBe('MMDCCXXXII');
    expect(ArabicConvert(1944)).toBe('MCMXLIV');
    expect(ArabicConvert(3999)).toBe('MMMCMXCIX');
  });

  it('should fail arabic number bigger than 3999', () => {
    expect(() => ArabicConvert(4000)).toThrow(Error);
  });

  it('should fail convert arabic number less than 1', () => {
    expect(() => ArabicConvert(0)).toThrow(Error);
  });
});
