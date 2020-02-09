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
  const result_arr = [];
  arr.filter(item => result_arr.indexOf(item) === -1 ? result_arr.push(item) : []);
  return result_arr;
}

const arr = [1, '2', 3, 4, 4, 4, '5', '5', '5'];

const uniq_arr = uniq(arr);
console.log(uniq_arr);

// export default uniq;
