/*
  Instructions:
  - Read the comment prior to each function for an explanation of the problem.
  - Fill in the function block for each problem.
  - Look at test cases to help clarify questions.
  - Run `npm test` to see how you're doing.
*/

/*
  uniq(arr): return a new array of unique values from 'arr'. 'arr' can contain strings and/or numbers.
*/
export function uniq(arr) {
  // write code here
}

/*
  insertAtPosition(element: number, list: number[], position: number): return a new array that inserts 
  'element' at a given 'position' in 'list'. If the 'element' is already in the 'list' or if 'position'
  is greater than the number of items in the 'list', don't insert it.
*/
export function insertAtPosition(element, list, position) {
  // write code here
}

/* 
  This data structure will be referenced by the problems below as 'items'.
*/
export const items = [
  {
    name: 'item 1',
    id: 1,
    props: {
      a: 'a prop1',
      b: 'b prop1',
    },
    values: [1, 2, 3],
  },
  {
    name: 'item 2',
    id: 2,
    props: {
      a: 'a prop2',
      b: 'b prop2',
    },
    values: [6, 1, 2, 3, 4],
  },
  {
    name: 'item 3',
    id: 3,
    props: {
      a: 'a prop3',
      c: 'c prop3',
    },
    values: [10, 1, 2, 3, 4, 5],
  },
  {
    name: 'item 4',
    id: 4,
    props: {
      a: 'a prop4',
      b: 'c prop4',
    },
    values: [1, 1, 1],
  },
  {
    name: 'item 5',
    id: 5,
    values: [0, 0, 0],
  },
];

/* 
  getIndexedObject(items): return an object that is indexed by item's 'name' and contains all its 'props'.
  Only index by key if 'props' exists for the item (no undefined).
*/
export function getIndexedObject(items) {
  // write code here
}

/*
  sumOfValuesMoreThanN(items, n: number): return a new array of "id's" for each item in items if the sum
  of all numbers in 'values' is more than 'n'.
*/
export function sumOfValuesMoreThanN(items, n) {
  // write code here
}

/*
  promiseByComparison(a: number, b: number, ms: number): return a promise that resolves within a specific
  time which is supplied ('ms'). Compare the values of 'a' and 'b' and the resolves the promise to a
   string of one of the following:
    - "a is greater than b"
    - "b is greater than a"
    - "a and b are equal"
*/
export function promiseByComparison(a, b, ms) {
  // write code here
}
