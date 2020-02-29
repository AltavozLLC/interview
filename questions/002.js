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
  
  var newArr = items.map((item,index) =>{
    return item.name;
  })
  return newArr;

}

// Create a function that returns one array of 'values'
// (it should not be an array of arrays).
export function getValues(items) {
  // write code here
  var newArr = items.map((item,index) =>{
    return {...item.values};
  })
  return newArr;

}

// Create a function that returns an array of 'values' that is
// unique and sorted (default javascript sort).
export function getSortedUniqueValues(items) {
  // write code here
  var newArr = items.map((item,index) =>{
    return {...item.values};
  })
  var setArr = new Set(newArr);
  return setArr;
}

// Create a function that returns an array of all the values
// of 'props' with key 'b'.
export function getPropsB(items) {
  // write code here
  var propsArr = [];
  for(var i = 0;i<items.length;i++){
    if(items[i].props){
      let props = items[i].props;
      for(let obj in props){
        if(obj.key == 'b')propsArr.push(obj.values)
      }
    }
  }
}

// Create a function that returns a plain javascript object that
// is indexed by 'name', and contains all the 'props'.
export function getIndexedObject(items) {
  // write code here
  var obj = {}
  for(var i =0;i<items.length;i++){
    obj[items[i].name] = {}
    obj[items[i].name] = items[i].props;
  }
  return obj;
}

// Create a function that returns an array of all the keys returned
// by getIndexedObject (from previous exercise)
export function getNamesFromObjects(items) {
  // write code here
  let obj = getIndexedObject(items);
  var newArr = [];
  for(var ob in obj){
   newArr.push(ob.key)
  }
  return newArr;
}

// Create a function that returns an array of 'values' that is
// unique but sorted in descending numeric order.
export function getSortedDescNumeric(items) {
  // write code here
}
