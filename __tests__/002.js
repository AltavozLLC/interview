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
    const expected = [1, 2, 3, 6, 1, 2, 3, 4, 10, 1, 2, 3, 4, 5];
    const actual = getValues(items);

    expect(isEqualArray(expected.sort(), actual.sort())).toBeTruthy();
  });

  it("getSortedUniqueValues", () => {
    const expected = [1, 10, 2, 3, 4, 5, 6];
    const actual = getSortedUniqueValues(items);

    expect(isEqualArray(expected,actual)).toBeTruthy();
  });

  it("getPropsB", () => {
    const expected = ['b prop1', 'b prop2'];
    const actual = getPropsB(items);

    expect(isEqualArray(expected,actual)).toBeTruthy();
  });

  it("getIndexedObject", () => {
    const expected = {
      "item 1": {
        a: "a prop1",
        b: "b prop1"
      },
      "item 2": {
        a: "a prop2",
        b: "b prop2"
      },
      "item 3": {
        a: "a prop3",
        c: "c prop3"
      }
    }
    ;
    const actual = getIndexedObject(items);

    expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
  });

  it("getNamesFromObjects", () => {
    const expected = ["item 1", "item 2", "item 3"];
    const actual = getNamesFromObjects(getIndexedObject(items));

    expect(isEqualArray(expected.sort(), actual.sort())).toBeTruthy();
  });
});
