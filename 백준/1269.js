const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => +item));

let [N, M] = input[0];
let A = input[1];
let B = input[2];

let setA = new Set();
let setB = new Set();

A.forEach((item) => {
  setA.add(item);
});

B.forEach((item) => {
  setB.add(item);
});

let AB = 0;
let BA = 0;
[...setA].forEach((item) => {
  if (!setB.has(item)) AB++;
});
[...setB].forEach((item) => {
  if (!setA.has(item)) BA++;
});

console.log(AB + BA);
