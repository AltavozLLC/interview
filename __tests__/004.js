import {
  notJohn,
  input,
} from "../questions/004";
import { isEqualArray } from "../_utils/array";

describe("Question 004", () => {
  it("notJohn", () => {
    const expected = [
      { name: 'Carlos', id: 1 },
      { name: 'Mary', id: 2 },
      { name: 'Deepak', id: 4 },
      { name: 'Angela', id: 6 },
      { name: 'Bao', id: 8 },
      { name: 'john', id: 9 },
      { name: 'Toji', id: 0 },
    ].map(v => v.id);
    const actual = notJohn(input).map(v => v.id);

    expect(isEqualArray(expected.sort(), actual.sort())).toBeTruthy();
  });
});
