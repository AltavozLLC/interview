/*
Problem: 
- Create a custom function called `uniq` that takes an array and 
  returns a new array of unique values from that previous array.
- The order of items should not change.
- The function should be able to work with an input array of
  strings and/or numbers.

Look at test cases to help clarify questions.
*/
function uniq(arr) {
  let arrResponse = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkUnique(arr[i],arr) === false) {
      arrResponse.push(arr[i]);
    }
  }
  return arrResponse;
}


function checkUnique(v,arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === v){
      return true;
    }else{
      return false;
    } 
  }
  
};


export default uniq;
