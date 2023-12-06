const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(0, -1);

for (let i = 0; i < N.length; i++) {
  let temp = [];
  for (let j = 1; j <= N[i]; j++) {
    if (N[i] % j === 0) {
      temp.push(j);
    }
  }
  let sum = temp.slice(0, -1).reduce((prev, cur) => prev + cur);
  if (sum === N[i]) console.log(N[i] + " = " + temp.slice(0, -1).join(" + "));
  else console.log(N[i] + " is NOT perfect.");
}
