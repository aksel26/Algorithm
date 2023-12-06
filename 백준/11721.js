const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputValue = fs.readFileSync(filePath).toString().trim();

let limit = Math.ceil(inputValue.length / 10) * 10;

for (let range = 0; range < limit; range += 10) {
  console.log(inputValue.slice(range, range + 10));
}
