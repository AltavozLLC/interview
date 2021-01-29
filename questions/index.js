/*
  Instructions:
  - Read the comment prior to each function for an explanation of the problem.
  - Fill in the function block for each problem.
  - Look at test cases to help clarify questions.
  - Run `npm test` to see how you're doing.
*/

/*
  Problem: uniq()
  Arguments: 
    - 'arr' (array of strings and/or numbers)
  - Returns a new array of unique values from 'arr'.
  - Do not mutate the original array and maintain the order of elements.
*/
export function uniq(arr) {
  // write code here
}

/*
  Problem: insertAtPosition()
  Arguments: 
    - 'element' (number)
    - 'list' (array of numbers)
    - 'position (number)

  - Return an array that inserts 'element' at given 'position' in the 'list'.
  - If the 'element' is already in the array, do not insert it.
  - If 'position' is greater than the number of items in the array, do not insert it.
  - Do not mutate the original array and return a new array.
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
  Problem: getIndexedObject()
  Arguments: 
    - 'items' (see 'items' example above)
  - Returns a plain javascript object that is indexed by an item's 'name' and contains all its 'props'.
  - Only indexes item by key if props exists for the item.
  - Look at test cases to help clarify expected results.
*/
export function getIndexedObject(items) {
  // write code here
}

/*
  Problem: sumOfValuesMoreThanN()
  Arguments: 
    - items (see 'items' example above)
    - n (number)
  - Returns an array of 'id's for those items where the sum of all the numbers in the 
    item's 'values' array is greater than 'n'.
  - Look at test cases to help clarify expected results.
*/
export function sumOfValuesMoreThanN(items, n) {
  // write code here
}

/*
  Problem: promiseByComparison()
  Arguments: 
    - a (number)
    - b (number)
    - ms (number)
  - Returns a Javascript promise that resolves within a specific time which is supplied
    as 'ms' in milliseconds.
  - The promise evaluates a and b and returns one of the following based on the evaluation:
    - 'a is greater than b'
    - 'b is greater than a'
    - 'a and b are equal'
*/
export function promiseByComparison(a, b, ms) {
  // write code here
}
