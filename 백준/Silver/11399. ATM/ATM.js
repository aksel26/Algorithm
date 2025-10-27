let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const NUMBER = parseInt(input[0]);
const WAITING = input[1].split(" ").map(Number);

// const newMap = new Map();

const arr = Array.from({ length: NUMBER }, (_, index) => [index + 1, WAITING[index]]);

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

let totalTime = 0;
let multiple = NUMBER;

for (let i = 0; i < arr.length; i++) {
  const [_, time] = arr[i];
  totalTime += time * multiple;
  multiple--;
}
console.log(totalTime);
