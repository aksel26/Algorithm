const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputValue = fs.readFileSync(filePath).toString().trim().split("\n");
console.log("inputValue: ", inputValue);
