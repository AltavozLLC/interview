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
  var tempArr = []
  items.map((value, index)=>{
    tempArr[index] = value.name;
  })
  return tempArr;
  // write code here
}

// Create a function that returns one array of 'values'
// (it should not be an array of arrays).
export function getValues(items) {
  // write code here
  var tempArr = []
  const cnt =0;
  items.map((value, index)=>{
    values = value.values;
    for (var i in values){
      tempArr[cnt++] = values[i];
    }
  })
  return tempArr;
}

// Create a function that returns an array of 'values' that is
// unique and sorted (default javascript sort).
export function getSortedUniqueValues(items) {
  // write code here
  var tempArr = []
  const cnt =0;
  items.map((value, index)=>{
    values = value.values;
    for (var i in values){
      if(!jQuery.inArray(tempArr, values[i])){
      tempArr[cnt++] = values[i];
      }
    }
  })
  return tempArr.sort();
}

// Create a function that returns an array of all the values
// of 'props' with key 'b'.
export function getPropsB(items) {
  // write code here
  var tempArr = []
  const cnt =0;
  items.map((value, index)=>{
    props = value.props;
    for (var key in values){
      if(key == 'b'){
        tempArr[cnt++] = props;
        break;
      }
    }
  })
  return tempArr;
}

// Create a function that returns a plain javascript object that
// is indexed by 'name', and contains all the 'props'.
export function getIndexedObject(items) {
  // write code here
  var tempArr = []
  const cnt =0;
  items.map((value, index)=>{
    props = value.props;
    tempArr[cnt++]= {name : value.name, props:values.props}
  })
  return tempArr;

}

// Create a function that returns an array of all the keys returned
// by getIndexedObject (from previous exercise)
export function getNamesFromObjects(items) {
  // write code here
}

// Create a function that returns an array of 'values' that is
// unique but sorted in descending numeric order.
export function getSortedDescNumeric(items) {
  // write code here
}
