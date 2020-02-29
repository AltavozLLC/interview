/* 
Write a function that takes the following existing 
array and returns a new array that excludes any item(s) 
where the name is equal to 'John’.

Look at test cases to help clarify questions.
*/

export const input = [
  { name: 'Carlos', id: 1 },
  { name: 'Mary', id: 2 },
  { name: 'John', id: 3 },
  { name: 'Deepak', id: 4 },
  { name: 'John', id: 5 },
  { name: 'Angela', id: 6 },
  { name: 'John', id: 7 },
  { name: 'Bao', id: 8 },
  { name: 'john', id: 9 },
  { name: 'Toji', id: 0 },
];

export function notJohn(existingArray) {
  // write code here
  return existingArray.filter((val) => val.name != "John");
}

