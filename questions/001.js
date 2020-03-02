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
  return arr.filter((num, index, self) => { return index === self.indexOf(num)});
}

export default uniq;

//console.log(uniq([5, 6, 7, 3, 4, 4, 4, 1, 4, 99, 4, 55, 2, 6, 6]));
