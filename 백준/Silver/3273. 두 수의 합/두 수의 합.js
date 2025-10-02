const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const targetNumber = Number(input[2]);


let count = 0;
let leftIdx = 0;
let rightIdx = numbers.length - 1;

while (leftIdx < rightIdx) {
  let leftValue = numbers[leftIdx];
  let rightValue = numbers[rightIdx];

  let sum = leftValue + rightValue;

  if (sum === targetNumber) {
    leftIdx++;
    rightIdx--;
    count++;
  } else if (sum < targetNumber) {
    leftIdx++;
  } else if (sum > targetNumber) {
    rightIdx--;
  }
}
console.log(count);