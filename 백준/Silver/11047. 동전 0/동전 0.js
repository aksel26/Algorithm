const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let K = Number(input[0].split(" ")[1]);
const coins = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

let count = 0;

for (const coin of coins) {
  if (K >= coin) {
    const coinCount = Math.floor(K / coin);
    K -= coinCount * coin;
    count += coinCount;
  }
  if (K === 0) break;
}

console.log(count);
