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
  var input = arr, idx=0, newArr=[], currVal=null;
  while (idx < input.length) {
    currVal = input[idx];
    if(newArr.indexOf(currVal) === -1){
      newArr.push(currVal);
    }
    idx++;
    }
  return newArr;
}

export default uniq;
