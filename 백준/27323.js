const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [w, h] = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(+w * +h);
