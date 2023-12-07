const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();
let output = "";
for (let i = 1; i <= input; i++) {
  output += " ".repeat(input - i) + "*".repeat(i * 2 - 1) + "\n";
}
console.log(output);
