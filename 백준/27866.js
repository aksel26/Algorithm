const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [string, N] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(string.charAt(Number(N) - 1));
