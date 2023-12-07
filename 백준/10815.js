const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = +input[0];
let M = +input[2];
let numbersN = input[1].split(" ").map(Number);
let numbersM = input[3].split(" ").map(Number);

let dic = {};
let answer = "";
numbersN.forEach((item) => {
  dic[item] = 1;
});
numbersM.forEach((item) => {
  let target = dic[item] || 0;
  answer += target + " ";
});
console.log(answer);
