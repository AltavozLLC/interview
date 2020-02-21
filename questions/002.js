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

// Create a function that returns one array of all item 'names'.
export function getNames(items) {
  // write code here
  const namesArray = [];
  items.map(item => {
    namesArray.push(item.name)
  });
  return namesArray;
}

// Create a function that returns one array of 'values'
// (it should not be an array of arrays).
export function getValues(items) {
  // write code here
  const valuesArray = [];
  items.map(item => {
    item.values.map(value => {
      valuesArray.push(value)
    })
  })
  return valuesArray;
}

// Create a function that returns an array of 'values' that is
// unique and sorted (default javascript sort).
export function getSortedUniqueValues(items) {
  // write code here
  const valuesArray = [];
  let exists = false;
  items.map(item => {
    item.values.map(value => {
      if (valuesArray.length > 0) {
        valuesArray.map(elem => {
          if (elem == value) {
            exists = true;
          }
        })
        if (!exists) {
          valuesArray.push(value)
        }
      } else {
        valuesArray.push(value)
      }

    })
  })
  return valuesArray;
}

// Create a function that returns an array of all the values
// of 'props' with key 'b'.
export function getPropsB(items) {
  // write code here
  const itemProps = [];
  items.map(item => {
    if (item.props.b)
      itemProps.push(item.props.b)
  })
  return itemProps;
}

// Create a function that returns a plain javascript object that
// is indexed by 'name', and contains all the 'props'.
export function getIndexedObject(items) {
  // write code here
  const newObj = {};
  items.forEach(item => {
    newObj[item.name]= item.props
  });
  return newObj;
}

// Create a function that returns an array of all the keys returned
// by getIndexedObject (from previous exercise)
export function getNamesFromObjects(items) {
  // write code here
  return Object.keys(items);
}

// Create a function that returns an array of 'values' that is
// unique but sorted in descending numeric order.
export function getSortedDescNumeric(items) {
  // write code here
}
