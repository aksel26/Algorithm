const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const heardSet = new Set();
const result = [];

for (let i = 1; i <= N; i++) {
  heardSet.add(input[i]);
}

for (let i = N + 1; i <= N + M; i++) {
  if (heardSet.has(input[i])) {
    result.push(input[i]);
  }
}

result.sort();
console.log(result.length);
console.log(result.join("\n"));
