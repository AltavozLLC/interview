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
  var newArr = [];
  for(var i = 0;i<arr.length;i++){
    var flag = false;
   newArr.filter((item,index) => {
     if(item == arr[i]){ flag = true; return;};
   })
   if(!flag)newArr.push(arr[i])
  }
  return newArr;
}

export default uniq;
