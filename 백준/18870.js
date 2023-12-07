const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => +item));
// let origin = [...input];
// let set = new Set(input.sort((a, b) => b - a));
// let setArray = [...set];
// let answer = [];

// for (let i = 0; i < origin.length; i++) {
//   let target = origin[i];
//   const arrLength = setArray.length;
//   answer.push(arrLength - (setArray.indexOf(target) + 1));
// }
// console.log(answer.join(" "));

// let N = Number(input.shift());

let set = new Set(input);
let uniq = [...set].sort((a, b) => a - b);

let dic = {};
uniq.forEach((e, index) => {
  dic[e] = index;
});
let answer = "";
for (let i = 0; i < input.length; i++) {
  answer += dic[input[i]] + " ";
}

console.log(answer);
