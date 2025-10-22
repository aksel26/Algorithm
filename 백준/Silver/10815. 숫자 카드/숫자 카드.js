const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const CARDS = input[1].split(" ").map(Number);
const TARGET_N = parseInt(input[2]);
const TARGET_CARDS = input[3].split(" ").map(Number);

const cardsMap = new Set();

CARDS.forEach((card) => cardsMap.add(card));

let result = new Array(TARGET_N).fill(0);

for (let i = 0; i < TARGET_CARDS.length; i++) {
  if (cardsMap.has(TARGET_CARDS[i])) result[i] = 1;
}

console.log(result.join(" "));
