/* 
Write a function which returns a new array that
contains all items from arrayA except for the 
ones that are also in arrayB.

Look at test cases to help clarify questions.

const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arrayB = [2, 4, 6, 0];
*/

function difference(arrayA, arrayB) {
  const result_arr = [];
  arrayA.filter(item => arrayB.indexOf(item) === -1 ? result_arr.push(item) : []);
  return result_arr;
}

const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arrayB = [2, 4, 6, 0];
const arr_diff = difference(arrayA, arrayB);
console.log(arr_diff);