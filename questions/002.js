/*
Given the following data answer the questions below

Look at test cases to help clarify questions.
*/

export const items = [
  {
    name: "item 1",
    id: 2,
    props: {
      a: "a prop1",
      b: "b prop1",
    },
    values: [1, 2, 3],
  },
  {
    name: "item 2",
    id: 3,
    props: {
      a: "a prop2",
      b: "b prop2",
    },
    values: [6, 1, 2, 3, 4],
  },
  {
    name: "item 3",
    id: 4,
    props: {
      a: "a prop3",
      c: "c prop3",
    },
    values: [10, 1, 2, 3, 4, 5],
  },
];

// Create a function that returns an array of 'values' that is
// unique and sorted (default javascript sort).
export function getSortedUniqueValues(items) {
  // write code here
}


// Create a function that returns an array of 'values' that is
// unique but sorted in descending numeric order.
export function getSortedDescNumeric(items) {
  // write code here
}
