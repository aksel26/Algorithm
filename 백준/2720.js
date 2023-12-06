const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...price] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const coins = [0.25, 0.1, 0.05, 0.01];

let answer = Array.from({ length: N }, () => Array(4).fill(0));

for (let i = 0; i < N; i++) {
  let initialPrice = price[i] / 100;
  for (let j = 0; j < coins.length; j++) {
    let A = Math.floor(initialPrice / coins[j]);

    answer[i][j] = A;

    let next = initialPrice - A * coins[j];

    initialPrice = next.toFixed(2);
  }
}

answer.forEach((item) => console.log(item.join(" ")));
