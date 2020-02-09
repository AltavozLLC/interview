/*
Given the following data answer the questions below

Look at test cases to help clarify questions.
*/

const items = [
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
function getNames(items) {
  const name_arr = [];
  items.map(item => name_arr.push(item.name));
  return name_arr;
}

const getnames_arr = getNames(items);
console.log(getnames_arr);

// Create a function that returns one array of 'values'
// (it should not be an array of arrays).
function getValues(items) {
  const val_arr = [];
  items.map(item => val_arr.push(...item.values));
  return val_arr;
}

const getvals_arr = getValues(items);
console.log(getvals_arr);

// Create a function that returns an array of 'values' that is
// unique and sorted (default javascript sort).
function getSortedUniqueValues(items) {
  const val_arr = [];
  items.map(item => val_arr.push(...item.values));
  const uniq_arr = [];
  val_arr.filter(item => uniq_arr.indexOf(item) === -1 ? uniq_arr.push(item) : []);
  return uniq_arr;
}

const getuniqvals_arr = getSortedUniqueValues(items);
console.log(getuniqvals_arr);

// Create a function that returns an array of all the values
// of 'props' with key 'b'.
function getPropsB(items) {
  const props_arr = [];
  items.map(item => props_arr.push(item.props));
  const res_props_obj = [];
  props_arr.filter(item => (typeof item.b !== 'undefined') ? res_props_obj.push(item.b) : []);
  return res_props_obj;
}

const getpropsb_arr = getPropsB(items);
console.log(getpropsb_arr);

// Create a function that returns a plain javascript object that
// is indexed by 'name', and contains all the 'props'.
function getIndexedObject(items) {
  const props_arr = [];
  items.map(item => props_arr.push(item.props));
  return props_arr;
}

const getindexed_arr = getIndexedObject(items);
console.log(getindexed_arr);

// Create a function that returns an array of all the keys returned
// by getIndexedObject (from previous exercise)
function getNamesFromObjects(items) {
  const name_arr = [];
  items.map(item => name_arr.push(item.name));
  return name_arr;
}

const getnameobj_arr = getNamesFromObjects(items);
console.log(getnameobj_arr);

// Create a function that returns an array of 'values' that is
// unique but sorted in descending numeric order.
function getSortedDescNumeric(items) {
  const val_arr = [];
  items.map(item => val_arr.push(...item.values));
  const uniq_arr = [];
  val_arr.filter(item => uniq_arr.indexOf(item) === -1 ? uniq_arr.push(item) : []);
  return uniq_arr.sort();
}

const getsortdesc_arr = getSortedDescNumeric(items);
console.log(getsortdesc_arr);
