const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let sum = 0;

for (let i = 0; i < K; i++) {
  sum += numbers[i];
}

let maxSum = sum;
for (let i = K; i < N; i++) {
  sum = sum - numbers[i - K] + numbers[i];

  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);
