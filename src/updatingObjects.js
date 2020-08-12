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
