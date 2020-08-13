//Example of immutable.js library

import { Map } from "immutable";

let book = Map({ title: "Harry Potter" });

// function publish(book) {
//   book.isPublished = true;
// }

publish(book);
console.log(book);
