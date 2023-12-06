const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, B] = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(parseInt(N, Number(B)));
