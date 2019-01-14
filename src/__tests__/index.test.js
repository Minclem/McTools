const utils = require('../index');

test('getType', () => {
    expect(utils.getType('')).toBe('String');

    expect(utils.getType(123)).toBe('Number');

    expect(utils.getType([])).toBe('Array');

    expect(utils.getType({})).toBe('Object');

    expect(utils.getType(null)).toBe('Null');

    expect(utils.getType(undefined)).toBe('Undefined');

    expect(utils.getType()).toBe('Undefined');

    expect(utils.getType(() => {})).toBe('Function');
});

test('cleanSpaceModel', () => {
    expect(utils.cleanSpaceModel(' 123 23 ')).toBe('12323');

    expect(utils.cleanSpaceModel(123)).toBe(123);

    expect(utils.cleanSpaceModel([
        12,
          ,
        [' 123 23 ']
    ]))
    .toEqual([12, '', ['12323']]);

    expect(utils.cleanSpaceModel({
        a: 123,
        b: [
            12,
              ,
            [' 123 23 ']
        ],
        c: {
            a: 123,
            b: [ 12, , [ ' 123 23 ' ]]
        }
    })).toEqual({
        a: 123,
        b: [
            12,
            '',
            [ '12323' ]
        ],
        c: {
            a: 123,
            b: [ 12, '', [ '12323' ]]
        }
    });

    expect(utils.cleanSpaceModel(null)).toBe('');

    expect(utils.cleanSpaceModel(undefined)).toBe('');

    expect(utils.cleanSpaceModel()).toBe('');

    expect( typeof utils.cleanSpaceModel(() => {}) === 'function' ).toBe(true);
});

test('isIe89', () => {
    expect(utils.isIe89()).toBe(false);
});

test('isInt', () => {
    expect(utils.isInt()).toBe(false);

    expect(utils.isInt('')).toBe(false);

    expect(utils.isInt(123.212)).toBe(false);

    expect(utils.isInt('123.212')).toBe(false);

    expect(utils.isInt(123)).toBe(true);

    expect(utils.isInt(' 123')).toBe(false);

    expect(utils.isInt('123')).toBe(true);

    expect(utils.isInt('12 3')).toBe(false);

    expect(utils.isInt('12 3 ')).toBe(false);

    expect(utils.isInt([])).toBe(false);

    expect(utils.isInt({})).toBe(false);

    expect(utils.isInt(null)).toBe(false);

    expect(utils.isInt(undefined)).toBe(false);

    expect(utils.isInt(() => {})).toBe(false);
});

test('isPlainObject', () => {
    expect(utils.isPlainObject()).toBe(false);

    expect(utils.isPlainObject('')).toBe(false);

    expect(utils.isPlainObject({})).toBe(true);

    expect(utils.isPlainObject(true)).toBe(false);

    expect(utils.isPlainObject([])).toBe(false);

    expect(utils.isPlainObject(null)).toBe(false);

    expect(utils.isPlainObject(window)).toBe(false);

    expect(utils.isPlainObject(() => {})).toBe(false);

    expect(utils.isPlainObject(123)).toBe(false);
});

test('isObj', () => {
    expect(utils.isObj()).toBe(false);

    expect(utils.isObj('')).toBe(false);

    expect(utils.isObj({})).toBe(true);

    expect(utils.isObj([])).toBe(true);

    expect(utils.isObj(null)).toBe(false);

    expect(utils.isObj(() => {})).toBe(false);

    expect(utils.isObj(123)).toBe(false);
});

test('isArray', () => {
    expect(utils.isArray()).toBe(false);

    expect(utils.isArray('')).toBe(false);

    expect(utils.isArray({})).toBe(false);

    expect(utils.isArray([])).toBe(true);

    expect(utils.isArray([12, 12])).toBe(true);

    expect(utils.isArray(null)).toBe(false);

    expect(utils.isArray(() => {})).toBe(false);

    expect(utils.isArray(123)).toBe(false);
});

test('isUndefined', () => {
    expect(utils.isUndefined()).toBe(true);

    expect(utils.isUndefined(undefined)).toBe(true);

    expect(utils.isUndefined('')).toBe(false);

    expect(utils.isUndefined({})).toBe(false);

    expect(utils.isUndefined([])).toBe(false);

    expect(utils.isUndefined(null)).toBe(false);

    expect(utils.isUndefined(() => {})).toBe(false);

    expect(utils.isUndefined(123)).toBe(false);
});

test('isNumber', () => {
    expect(utils.isNumber()).toBe(false);

    expect(utils.isNumber(undefined)).toBe(false);

    expect(utils.isNumber('')).toBe(false);

    expect(utils.isNumber({})).toBe(false);

    expect(utils.isNumber([])).toBe(false);

    expect(utils.isNumber(null)).toBe(false);

    expect(utils.isNumber(() => {})).toBe(false);

    expect(utils.isNumber(123)).toBe(true);

    expect(utils.isNumber(123.122)).toBe(true);

    expect(utils.isNumber('-123')).toBe(true);

    expect(utils.isNumber('123')).toBe(true);

    expect(utils.isNumber('123.122')).toBe(true);

    expect(utils.isNumber('0x12')).toBe(true);

    expect(utils.isNumber('012')).toBe(true);

    expect(utils.isNumber('-123.122')).toBe(true);

    expect(utils.isNumber('123.122.212')).toBe(false);
});

test('isDiff', () => {
    expect(utils.isDiff()).toBe(false);

    expect(utils.isDiff(undefined)).toBe(false);

    expect(utils.isDiff(undefined, undefined)).toBe(false);

    expect(utils.isDiff(null, null)).toBe(false);

    expect(utils.isDiff(1, 1)).toBe(false);

    expect(utils.isDiff({}, {})).toBe(false);

    expect(utils.isDiff([], [])).toBe(false);

    expect(utils.isDiff([1, 2], [1])).toBe(true);

    expect(utils.isDiff([1, 2], [1, 2])).toBe(false);

    expect(utils.isDiff(false, true)).toBe(true);

    expect(utils.isDiff(NaN, NaN)).toBe(false);
});