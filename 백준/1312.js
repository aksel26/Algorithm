const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b, n] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let value = a % b;

// 나누어 떨어지면 바로 0 으로 출력
if (value === 0) {
  return console.log(0);
}

for (let index = 0; index < n - 1; index++) {
  value = value * 10;
  console.log("value: ", value);
}

value *= 10;

console.log(Math.floor(value / b));

// let commaIndex = value.indexOf(".") + 1;

// result = +value.slice(commaIndex, commaIndex + Number(input[2])).slice(-1);
