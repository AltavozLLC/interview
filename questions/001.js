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
  // Write code here
  const uniqArr = [];

  for (let itemIndex = 0; itemIndex < arr.length; itemIndex++) {
    if (uniqArr.indexOf(arr[itemIndex]) === -1) {
      uniqArr.push(arr[itemIndex]);
    }
  }

  return uniqArr;
}

export default uniq;
