const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(filePath).toString().trim();

let sum = 0;
let group = 0;

for (let i = 1; sum < input; i++) {
  sum += i;
  group = i;
}
let 분모 = 0;
let 분자 = 0;
let indexTemp = sum - group;
if (group % 2 === 0) {
  while (indexTemp !== input) {
    indexTemp++;
    분자 += 1;
    분모 = group--;
  }
} else {
  while (indexTemp !== input) {
    indexTemp++;
    분모 += 1;
    분자 = group--;
  }
}

console.log(`${분자}/${분모}`);
