const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputValue = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .slice(1);

inputValue.forEach((item) => {
  console.log(item[0] + item[item.length - 1]);
});
