import 'core-js';

import {
  difference,
} from "../questions/003";
import { isEqualArray } from "../_utils/array";

describe("Question 003", () => {
  it("difference", () => {
    const inputA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const inputB = [2, 4, 6, 0];
    const expected = [1, 3, 5, 7, 8, 9];
    const actual = difference(inputA, inputB);

    expect(isEqualArray(expected.sort(), actual.sort())).toBeTruthy();
  });
});
