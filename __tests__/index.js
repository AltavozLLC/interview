import {
  items,
  uniq,
  insertAtPosition,
  getIndexedObject,
  sumOfValuesMoreThanN,
  promiseByComparison,
} from '../questions/index';
import { isEqualArray } from '../_utils/array';


describe('uniq', () => {
  it('mixed', () => {
    const input = [0, '0', 1, '2', 3, 4, 4, '4', '5', '5', '5'];
    const expected = [0, '0', 1, '2', 3, 4, '4', '5'];
    const actual = uniq(input);
    expect(isEqualArray(expected, actual)).toBeTruthy();
  });

  it('ordered', () => {
    const input = [5, 6, 7, 3, 4, 4, 4, 1, 4, 99, 4, 55, 2, 6, 6];
    const expected = [5, 6, 7, 3, 4, 1, 99, 55, 2];
    const actual = uniq(input);
    expect(isEqualArray(expected, actual)).toBeTruthy();
  });

  it('no mutation', () => {
    const input = [1, 1, 2, 3];
    const actual = uniq(input);
    expect(input).toEqual([1, 1, 2, 3]);
    expect(actual).toEqual([1, 2, 3]);
  });

  it('large array', () => {
    const input = [...Array(1000).keys()];
    const expected = input;
    const actual = uniq(input);
    expect(isEqualArray(expected, actual)).toBeTruthy();
  });
});

describe('insertAtPosition', () => {
  it('insert', () => {
    const actual = insertAtPosition(1, [0, 2, 3], 1);
    const expected = [0, 1, 2, 3];
    expect(actual).toEqual(expected);
  });

  it('no mutation', () => {
    const list = [0, 2, 3];
    const actual = insertAtPosition(1, list, 1);
    expect(list).toEqual([0, 2, 3]);
    expect(actual).toEqual([0, 1, 2, 3]);
  });

  it('length', () => {
    const list = [0, 2, 3];
    const actual = insertAtPosition(1, list, 3);
    expect(actual).toEqual(list);
  });

  it('exists', () => {
    const list = [0, 2, 3];
    const actual = insertAtPosition(0, list, 1);
    expect(actual).toEqual(list);

    const listEmpty = [];
    const actualEmpty = insertAtPosition(0, listEmpty, 1);
    expect(actualEmpty).toEqual(listEmpty);
  });
});

describe('getIndexedObject', () => {
  it('base', () => {
    const expected = {
      'item 1': {
        a: 'a prop1',
        b: 'b prop1',
      },
      'item 2': {
        a: 'a prop2',
        b: 'b prop2',
      },
      'item 3': {
        a: 'a prop3',
        c: 'c prop3',
      },
      'item 4': {
        a: 'a prop4',
        b: 'c prop4',
      },
    };
    const actual = getIndexedObject(items);
    expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
    expect(Object.keys(actual).sort()).toEqual(['item 1', 'item 2', 'item 3', 'item 4']);
  });
});

describe('sumOfValuesMoreThanN', () => {
  it('base', () => {
    const actual1 = sumOfValuesMoreThanN(items, 6);
    const expected1 = [2, 3];
    const actual2 = sumOfValuesMoreThanN(items, 5);
    const expected2 = [1, 2, 3];
    const actual3 = sumOfValuesMoreThanN(items, 100);
    const expected3 = [];
    const actual4 = sumOfValuesMoreThanN(items, 24);
    const expected4 = [3];
    const actual5 = sumOfValuesMoreThanN(items, 2);
    const expected5 = [1, 2, 3, 4];

    expect(actual1).toEqual(expected1);
    expect(actual2).toEqual(expected2);
    expect(actual3).toEqual(expected3);
    expect(actual4).toEqual(expected4);
    expect(actual5).toEqual(expected5);
  });
});

describe('promiseByComparison', () => {
  it('time', async () => {
    jest.setTimeout(60000);

    const start = performance.now();
    await promiseByComparison(2, 1, 2000);
    const stop = performance.now();

    expect(stop - start).toBeGreaterThanOrEqual(2000);
    expect(stop - start).toBeLessThan(3000);
  });

  it('greater than', async () => {
    jest.setTimeout(60000);

    const actualA = await promiseByComparison(2, 1, 2000);
    expect(actualA).toEqual('a is greater than b');

    const actualB = await promiseByComparison(1, 2, 2000);
    expect(actualB).toEqual('b is greater than a');
  });

  it('equal', async () => {
    jest.setTimeout(60000);
    const actualC = await promiseByComparison(1, 1, 2000);
    expect(actualC).toEqual('a and b are equal');
  });
});


