import { exists } from "fs";

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
  let exists = false;
  const output = [];
  
  arr.map(item => {
    if (output.length > 0) {
      output.map(result => {
        if(parseInt(item) === parseInt(result)){
          exists = false;
          return;
        }
        exists = true;
      })
      if(exists == true){
        output.push(item)
      }
    } else {
      output.push(item)
    }
  });
  console.log(output)
  return output;
}

export default uniq;
