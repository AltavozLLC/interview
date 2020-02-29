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
  var tempArr = []
  var count =0;
  for(var i in arr){
    if(tempArr.indexOf( arr[i]) === false){
      tempArr[count++] = arr[i];
    }
  }
  //console.log("testing")
  console.log(tempArr);
return tempArr;
}
const input = [1, 2, 3, 3, 3, 4, 4, 4, 4, 5];
uniq(input);
export default uniq;