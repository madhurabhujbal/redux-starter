//Immutability with arrays:
const numbers = [1, 2, 3];
//Adding element in array
// const added = [...numbers, 4]; //adding element at end of array
// const added = [4, ...numbers]; //adding element at beginning of array
const index = numbers.indexOf(2); //adding element at a specific position in an array
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added);

//Removing element from array
const remove = numbers.filter((n) => n !== 2);
console.log(remove);

//Updating element in an array
const updatedArray = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updatedArray);
