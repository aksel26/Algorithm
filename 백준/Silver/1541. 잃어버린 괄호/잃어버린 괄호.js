let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const splitMinus = input.split("-");

let sum = 0;
let minusSum = 0;

for (let i = 0; i < splitMinus.length; i++) {
  if (i === 0)
    sum += splitMinus[i]
      .split("+")
      .map(Number)
      .reduce((acc, cur) => acc + cur);
  else {
    minusSum -= splitMinus[i]
      .split("+")
      .map(Number)
      .reduce((acc, cur) => acc + cur);
  }
}

console.log(sum + minusSum);
