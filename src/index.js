// Example of immer library

import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  }); //first arg is initial state of object; second arg  is function that takes original object and specifies mutations on it. produce() returns a new updated object
}

let updated = publish(book);
console.log(book);
console.log(updated);
