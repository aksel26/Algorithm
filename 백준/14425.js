const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const LIST = input.slice(1);
const A = LIST.slice(0, N);
const B = LIST.slice(N);
const set = new Set(A);
let answer = 0;
B.forEach((item) => {
  set.has(item) && answer++;
});
console.log(answer);
