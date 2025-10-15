const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const str = input[0];
const length = Number(input[1]);

const targets = input.slice(2);

const answer = [];

for (let i = 0; i < length; i++) {
  const [alphabet, l, r] = targets[i].split(" ");

  const newStr = str.slice(Number(l), Number(r) + 1);

  let cnt = 0;
  newStr.split("").forEach((str) => {
    if (str === alphabet) {
      cnt++;
    }
  });
  answer.push(cnt);
}

console.log(answer.join("\n"));
