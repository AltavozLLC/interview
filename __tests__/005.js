import twoSum from '../questions/005';

describe('Question 005', () => {
  test('initial example', () => {
    const input = [2, 7, 11, 15];
    const target = 9;

    expect(twoSum(input, target)).toEqual([0, 1]);
  });

  test('negatives', () => {
    const input = [-1, -5, -8, -2, -12, -34];
    const target = -17;

    expect(twoSum(input, target)).toEqual([1, 4]);
  });

  test('mixed negatives and postives array', () => {
    const input = [-40, 3, 83, -21, 1, 0, -2];
    const target = -1;

    expect(twoSum(input, target)).toEqual([4, 6]);
  });

  test('numbers at end of array', () => {
    const input = [-40, 3, 83, -21, 1, 0, -2];
    const target = -2;

    expect(twoSum(input, target)).toEqual([5, 6]);
  });
});