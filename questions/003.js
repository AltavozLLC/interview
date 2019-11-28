/* 
Write a function which returns a new array that
contains all items from arrayA except for the 
ones that are also in arrayB.

Look at test cases to help clarify questions.

const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arrayB = [2, 4, 6, 0];
*/

export function difference(arrayA, arrayB) {
  var arr1 = arrayA, arr2 = arrayB, newArr = [];
  arr1.forEach(element => {
    if(arr2.indexOf(element) === -1){
      newArr.push(element);
    }
  });

  return newArr;
}
