//Example of immutable.js library

import { Map } from "immutable";

let book = Map({ title: "Harry Potter" });

// function publish(book) {
//   book.isPublished = true;
// }

//publish(book);
console.log(book.get("title")); //we cannot access book object properties by book.title. We have to use get().
console.log(book.toJS()); //To convert immutable object to plain JS object, we have to call toJS()
