import {
  items,
  getNames,
  getValues,
  getSortedUniqueValues,
  getPropsB,
  getIndexedObject,
  getNamesFromObjects
} from "../questions/002";
import { isEqualArray } from "../_utils/array";

describe("Question 002", () => {
  it("getNames", () => {
    const expected = ["item 1", "item 2", "item 3"];
    const actual = getNames(items);

    expect(isEqualArray(expected.sort(), actual.sort())).toBeTruthy();
  });

  it("getValues", () => {
    const expected = ["item 1", "item 2", "item 3"];
    const actual = getNames(items);

    expect(isEqualArray(expected.sort(), actual.sort())).toBeTruthy();
  });

  it("getSortedUniqueValues", () => {});

  it("getPropsB", () => {});

  it("getIndexedObject", () => {});

  it("getNamesFromObjects", () => {});
});
