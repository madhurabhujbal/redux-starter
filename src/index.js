import { compose, pipe } from "ramda";

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div> ${str} </div>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = compose(wrapInDiv, toLowerCase, trim);
console.log(transform(input));
//const result = wrapInDiv(toLowerCase(trim(input)));
