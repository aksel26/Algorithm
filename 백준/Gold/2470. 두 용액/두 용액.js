const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const TOTAL = parseInt(input[0]);
const POSIONS = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = TOTAL - 1;

let min = Number.MAX_SAFE_INTEGER;

let minPotions = [];

while (start < end) {
  const mix = POSIONS[start] + POSIONS[end];

  let mixAbs = Math.abs(mix);

  if (mixAbs < min) {
    min = mixAbs;
    minPotions = [POSIONS[start], POSIONS[end]];
  }

  if (mix < 0) {
    start++;
  } else {
    end--;
  }
}
console.log(minPotions.sort((a, b) => a - b).join(" "));
