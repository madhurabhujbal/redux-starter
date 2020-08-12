function add(a) {
  return function (b) {
    return a + b;
  };
}

add2 = add(2);
add10 = add(10);
add100 = add(100);

console.log(add2);
console.log(add10);
console.log(add100);

res2 = add2(3);
console.log(res2);
res2 = add10(3);
console.log(res2);
res2 = add100(3);
console.log(res2);

function wrap(type) {
  return function (str) {
    return "<" + type + ">" + str + "</" + type + ">";
  };
}

wrapDiv = wrap("div");
wrapSpan = wrap("span");

val = "javascript";

console.log(wrapDiv(val));
console.log(wrapSpan(val));

//Updating an object
const person = { name: "John" };
const updated = Object.assign({}, person, { name: "Bob", age: 30 }); // copy person object in empty object and add name and age properties in new object.
console.log(updated);
