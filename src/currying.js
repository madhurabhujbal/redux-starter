function add(a) {
  return function (b) {
    return a + b;
  };
}

add2 = add(2);
add10 = add(10);
add100 = add(100);

// console.log(add2);
// console.log(add10);
// console.log(add100);

res2 = add2(3);
// console.log(res2);
res2 = add10(3);
// console.log(res2);
res2 = add100(3);
// console.log(res2);

function wrap(type) {
  return function (str) {
    return "<" + type + ">" + str + "</" + type + ">";
  };
}

wrapDiv = wrap("div");
wrapSpan = wrap("span");

val = "javascript";

// console.log(wrapDiv(val));
// console.log(wrapSpan(val));

//Updating an object by Object.assign method
const person = { name: "John" };
const updated = Object.assign({}, person, { name: "Bob", age: 30 }); // copy person object in empty object and add name and age properties in new object.
// console.log(updated);

//Updating an object by spread operator
const man = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};
const manupdt = {
  ...man,
  name: "Bob",
  age: 30,
  address: { ...person.address, city: "New York" },
}; // copy man object with all its properties and add name and age properties in new object.
//console.log(man);

//Immutability with arrays:
const numbers = [1, 2, 3];
//Adding element in array
// const added = [...numbers, 4]; //adding element at end of array
// const added = [4, ...numbers]; //adding element at beginning of array
const index = numbers.indexOf(2); //adding element at a specific position in an array
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added);
