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
  var temp = {};
  arr.forEach(element => {
    if (!temp[element]) {
      temp[element] = 1;
    } else {
      temp[element] = temp[element] + 1;
    }
  });

  var uniqueArray = [];
  for (const key in temp) {
    uniqueArray.push(key);
  }

  return uniqueArray;
}

export default uniq;
