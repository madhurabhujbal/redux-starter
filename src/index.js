import { compose, pipe } from "ramda";

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrap = (type, str) => `<${type}> ${str} </${type}>`;
const toLowerCase = (str) => str.toLowerCase();

// const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrap);
console.log(transform(input));
//const result = wrapInDiv(toLowerCase(trim(input)));
