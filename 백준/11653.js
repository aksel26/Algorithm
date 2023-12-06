const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let NUM = +fs.readFileSync(filePath).toString().trim();

const nums = [2, 3, 5, 7];
let answer = [];
for (let i = 2; i <= NUM; i++) {
  while (NUM % i === 0) {
    NUM /= i;
    answer.push(i);
  }

  if (NUM === 1) break;
}

console.log(answer.join("\n"));
