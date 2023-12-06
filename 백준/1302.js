const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputValue = fs.readFileSync(filePath).toString().trim().split("\n");

let N = inputValue[0];
let inputs = inputValue.slice(1);
console.log("inputs: ", inputs);

// let books = new Map();
let count = 1;
let arr = [];

for (let i = 0; i < N; i++) {
  arr[i] = inputs[i];
}
console.log("arr: ", arr);

// console.log("asdf: ", books);
// console.log("books: ", books);
// console.log("books: ", books);
