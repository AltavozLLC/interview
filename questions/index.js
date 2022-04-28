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
  return [...new Set(arr)]
}

/*
  insertAtPosition(element: number, list: number[], position: number): return a new array that inserts 
  'element' at a given 'position' in 'list'. 
  
  | If the 'element' is already in the 'list' 
  | if 'position' is greater than the number of items in the 'list', don't insert it.
*/
export function insertAtPosition(element, list, position) {
  // write code here
  if (position >= list.length) return list;
  if (list.indexOf(element) >= 0) return list;

  return [
    ...list.slice(0, position),
    element,
    ...list.slice(position)
  ]
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
  let filtered = items.filter(item => {
    if ('props' in item) return item
  });

  let result = {};
  for (const item of filtered) {
    result[item.name] = {
      ...item.props
    };
  }


  return result;
}

/*
  sumOfValuesMoreThanN(items, n: number): return a new array of "id's" for each item in items if the sum
  of all numbers in 'values' is more than 'n'.
*/
export function sumOfValuesMoreThanN(items, n) {
  // Helper fn
  const sumNumbersInArray = (previousValue, currentValue) => previousValue + currentValue
  let valuesHigherThanNIndexes = [];

  items.forEach((item, i) => {
    if (item.values.reduce(sumNumbersInArray) > n) valuesHigherThanNIndexes.push(i + 1);
  });

  return valuesHigherThanNIndexes;
}

/*
  promiseByComparison(a: number, b: number, ms: number): 
  return a promise that resolves within a specific time which is supplied ('ms'). 
  Compare the values of 'a' and 'b' and then resolves the promise to a string if one of the following:
    - "a is greater than b"
    - "b is greater than a"
    - "a and b are equal"
*/
export function promiseByComparison(a, b, ms) {
  const callback = () => {
    if (a > b) return "a is greater than b"
    if (b > a) return "b is greater than a"
    if (a === b) return "a and b are equal"
  }

  return new Promise((resolve) => {
    setTimeout(resolve.bind(callback), ms)
  });
}
