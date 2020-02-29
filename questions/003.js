/* 
Write a function which returns a new array that
contains all items from arrayA except for the 
ones that are also in arrayB.

Look at test cases to help clarify questions.

const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arrayB = [2, 4, 6, 0];
*/

export function difference(arrayA, arrayB) {
  // write code here
  var data = [], diff = [];

  for (var i = 0; i < arrayA.length; i++) {
      data[arrayA[i]] = true;
  }

  for (var i = 0; i < arrayB.length; i++) {
      if (data[arrayB[i]]) {
          delete data[arrayB[i]];
      } else {
          data[arrayB[i]] = true;
      }
  }

  for (var val in data) {
      diff.push(val);
  }

  return diff;
}

