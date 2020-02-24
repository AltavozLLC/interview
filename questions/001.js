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

  var map={}
  // create a map with key as input elements and values as number of occurence count
  arr.forEach(element => {
    if(map[element]){
      // increment the occurence count
      map[element] = map[element]++;
    }else{
      map[element] = 1;
    }
  });

  //filter the elements whose oocurent count is 1
  return Object.keys(map).filter(i=> map[i]==1)
}

export default uniq;
