const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let limit = input.length;
let set = new Set();
for (let i = 0; i < limit; i++) {
  for (let j = i + 1; j <= limit; j++) {
    let temp = input.slice(i, j);
    set.add(temp);
  }
}

console.log(set.size);
