const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, INPUT] = fs.readFileSync(filePath).toString().trim().split("\n");
let numbers = INPUT.split(" ").map(Number);

let arr = Array.from({ length: N }, () => 0);
let numbersCopy = [...numbers];
let set = new Set();
for (let i = 0; i < numbers.length; i++) {
  let tempNum = numbers[i];

  numbersCopy.sort((a, b) => b - a).forEach((item) => set.add(item));
  const temp = [...set];

  arr[i] = temp.slice(temp.indexOf(tempNum) + 1).length;
}
console.log(arr.join(" "));
