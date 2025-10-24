let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const NUMBERS = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const TARGETS_LENGTH = parseInt(input[2]);
const TARGETS = input[3].split(" ").map(Number);

let answer = new Array(TARGETS_LENGTH).fill(0);

const MAX = Math.max(NUMBERS);

for (let i = 0; i < TARGETS_LENGTH; i++) {
  let firstIdx = 0,
    lastIdx = NUMBERS.length - 1;

  // 비교 하려는 값
  const current = TARGETS[i];

  //   배열의 최댓값보다 크다면 반복문 생략
  if (current > MAX) continue;

  //   숫자들 중 가운데 위치하는 인덱스
  while (firstIdx <= lastIdx) {
    const midIdx = Math.floor((firstIdx + lastIdx) / 2);

    //   NUMBERS[midIdx] 의 값이 current보다 작다면 midIdx가 lastIdx가 된다
    if (current < NUMBERS[midIdx]) {
      lastIdx = midIdx - 1;
    } else if (current > NUMBERS[midIdx]) {
      firstIdx = midIdx + 1;
    } else if (current === NUMBERS[midIdx]) {
      answer[i] = 1;
      break;
    }
  }
}
console.log(answer.join("\n"));
