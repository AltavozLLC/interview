import {
  getSortedUniqueValues,
  getSortedDescNumeric
} from "../questions/002";
import { isEqualArray } from "../_utils/array";

describe("Question 002", () => {
  it("getSortedUniqueValues", () => {
    const expected = [1, 10, 2, 3, 4, 5, 6];
    const actual = getSortedUniqueValues(items);

    expect(isEqualArray(expected, actual)).toBeTruthy();
  });

  it("getSortedDescNumeric", () => {
    const expected = [10, 6, 5, 4, 3, 2, 1];
    const actual = getSortedDescNumeric(items);

    expect(isEqualArray(expected, actual)).toBeTruthy();
  });
});
