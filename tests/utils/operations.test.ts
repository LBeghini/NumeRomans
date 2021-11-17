import {
  assertSetInObject,
  assertCharacterOccurrences,
  characterCounting,
  assertItemInSet,
  assertCharacterSequency,
  assertNumberRange,
} from '../../src/utils/operations';

describe('Assert Set in Object', () => {
  it('should return true to whole set in object ', () => {
    const set = ['a', 'b', 'c'];
    const object = {
      a: 1,
      b: 2,
      c: 3,
    };

    expect(assertSetInObject(set, object)).toBeTruthy();
  });

  it('should return true to one missing item in object', () => {
    const set = ['a', 'b'];
    const object = {
      a: 1,
      b: 2,
      c: 3,
    };

    expect(assertSetInObject(set, object)).toBeTruthy();
  });

  it('should return false to extra item in object', () => {
    const set = ['a', 'b', 'c', 'd'];
    const object = {
      a: 1,
      b: 2,
      c: 3,
    };

    expect(assertSetInObject(set, object)).toBeFalsy();
  });
});

describe('Assert Character Occurrences', () => {
  it('should return true to correct character limit assertion ', () => {
    const set = ['a', 'b', 'c', 'a', 'c'];

    expect(assertCharacterOccurrences(set, 2, [])).toBeTruthy();
  });

  it('should return false to incorrect character limit assertion', () => {
    const set = ['a', 'b', 'c', 'a', 'a', 'b', 'c', 'a'];

    expect(assertCharacterOccurrences(set, 2, [])).toBeFalsy();
  });

  it('should return true to correct character limit assertion with except', () => {
    const set = ['a', 'b', 'c', 'a', 'a', 'b', 'c', 'a'];

    expect(assertCharacterOccurrences(set, 2, ['a'])).toBeTruthy();
  });
});

describe('assert Item in Set', () => {
  it('should return true to item belonging to set ', () => {
    const set = ['a', 'b', 'c', 'a', 'c'];
    const item = 'a';

    expect(assertItemInSet(item, set)).toBeTruthy();
  });

  it('should return false to item belonging to set ', () => {
    const set = ['a', 'b', 'c', 'a', 'c'];
    const item = 'd';

    expect(assertItemInSet(item, set)).toBeFalsy();
  });
});

describe('Character counting', () => {
  it('should return correct number of characters ', () => {
    const set = ['a', 'a', 'a', 'b', 'b', 'c'];
    expect(characterCounting(set)[0]).toBe(3);
    expect(characterCounting(set)[1]).toBe(2);
    expect(characterCounting(set)[2]).toBe(1);
  });
});

describe('Assert Character Sequency', () => {
  it('should return true to correct character sequency limit ', () => {
    const set = ['a', 'a', 'a', 'b'];
    expect(assertCharacterSequency(set, 3)).toBeTruthy();
  });

  it('should return false to incorrect character sequency limit ', () => {
    const set = ['a', 'a', 'a', 'b', 'c'];
    expect(assertCharacterSequency(set, 2)).toBeFalsy();
  });
});

describe('Assert Character Sequency', () => {
  it('should return true to numeral ir range ', () => {
    expect(assertNumberRange(3, 1, 3)).toBeTruthy();
    expect(assertNumberRange(1, 1, 3)).toBeTruthy();
  });

  it('should return false to numeral not in range ', () => {
    expect(assertNumberRange(3, 1, 2)).toBeFalsy();
    expect(assertNumberRange(0, 1, 2)).toBeFalsy();
  });
});
