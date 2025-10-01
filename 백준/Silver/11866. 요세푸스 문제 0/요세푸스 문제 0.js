const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

const [totalLength, targetOrder] = input.map(Number);

let arr = Array.from({ length: totalLength }, (_, index) => index + 1);

let answer = [];

while (arr.length) {
  for (let i = 1; i <= targetOrder; i++) {
    const current = arr.shift();

    if (i === targetOrder) {
      answer.push(current);
    } else {
      arr.push(current);
    }
  }
}

console.log(`<${answer.join(", ")}>`);
