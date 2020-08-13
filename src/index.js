// Example of immer library

import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
  book.isPublished = true;
}

publish(book);
console.log(book);
