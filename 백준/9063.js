const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

let N = +input.shift();

let arrX = [];
let arrY = [];

input.forEach((item) => {
  arrX.push(+item[0]);
  arrY.push(+item[1]);
});

let sortedX = arrX.sort((a, b) => b - a);
let sortedY = arrY.sort((a, b) => b - a);

let lengthX = sortedX[0] - sortedX[sortedX.length - 1];
let lengthY = sortedY[0] - sortedY[sortedY.length - 1];

console.log(lengthX * lengthY);
