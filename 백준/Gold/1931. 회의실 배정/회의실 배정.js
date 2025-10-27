let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const TIMES = input.slice(1).map((time) => time.split(" ").map(Number));

TIMES.sort((s, e) => {
  if (s[1] === e[1]) {
    return s[0] - e[0];
  } else {
    return s[1] - e[1];
  }
});

let count = 0;

let endTime = 0;

TIMES.forEach((time) => {
  if (time[0] >= endTime) {
    count++;

    endTime = time[1];
  }
});

console.log(count);
