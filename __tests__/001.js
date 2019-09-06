import uniq from '../questions/001';
import { isEqualArray } from '../_utils/array';

describe('Question 001', () => {
  it('basic', () => {
    const input = [1, 2, 3, 3, 3, 4, 4, 4, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    const actual = uniq(input);

    expect(isEqualArray(expected, actual)).toBeTruthy();
  });

  it('strings', () => {
    const input = ['1', '2', '3', '3', '3', '4', '4', '4', '5'];
    const expected = ['1', '2', '3', '4', '5'];
    const actual = uniq(input);

    expect(isEqualArray(expected, actual)).toBeTruthy();
  });

  it('mixed', () => {
    const input = [1, '2', 3, 4, 4, 4, '5', '5', '5'];
    const expected = [1, '2', 3, 4, '5'];
    const actual = uniq(input);

    expect(isEqualArray(expected, actual)).toBeTruthy();
  });

  it('ordered', () => {
    const input = [5, 6, 7, 3, 4, 4, 4, 1, 4, 99, 4, 55, 2, 6, 6];
    const expected = [5, 6, 7, 3, 4, 1, 99, 55, 2];
    const actual = uniq(input);

    expect(isEqualArray(expected, actual)).toBeTruthy();
  });

  it('large array', () => {
    const input = [...Array(1000000).keys()];
    const expected = input;
    const actual = uniq(input);

    expect(isEqualArray(expected, actual)).toBeTruthy();
  });
})