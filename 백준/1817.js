const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputValue = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = inputValue[0].split(" ").map(Number);

let books = inputValue[1].split(" ").map(Number);

console.log(N, M, books);
let cnt = 0;

let current = M;

for (let i = 0; i < books.length; i++) {
  current = current - books[i];
  if (M - books[i] < books[i + 1]) {
    cnt++;
  }
}

console.log("cnt: ", cnt);
