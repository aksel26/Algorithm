const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [START_NUM, END_NUM] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = Array.from(
  { length: END_NUM - START_NUM + 1 },
  (_, index) => index + START_NUM
);

const isPrime = (num) => {
  if (num <= 1) return 0;

  if (num % 2 === 0) return num === 2 ? 1 : 0;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i == 0) return 0;
  }
  return 1;
};

const answer = arr.filter((item) => {
  return isPrime(item) ? item : false;
});
if (answer.length) {
  console.log(answer.reduce((prev, cur) => prev + cur));
  console.log(answer[0]);
} else {
  console.log(-1);
}
