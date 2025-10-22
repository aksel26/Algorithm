let [N, M] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const numbers = Array.from({ length: N }, (_, index) => index + 1);

let count = M - 1;
let result = [];

while (numbers.length > 0) {
  const front = numbers.shift();

  if (count === 0) {
    result.push(front);
    count = M - 1;
  } else {
    numbers.push(front);
    count--;
  }
}

console.log(`<${result.join(", ")}>`);
