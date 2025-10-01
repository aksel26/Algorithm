const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ");
const coins = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

let count = 0;

coins.forEach((coin) => {
  if (Math.floor(K / coin) !== 0) {
    let t = Math.floor(K / coin);
    K = K - t * coin;
    count += t;
  }
});

console.log(count);
