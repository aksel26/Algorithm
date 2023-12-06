const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const POINT = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

let arrX = [];
let arrY = [];
POINT.forEach((item) => {
  arrX.push(item[0]);
  arrY.push(item[1]);
});

const outNumber = (arr) => {
  let output = 0;
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      let cnt = map.get(arr[i]);
      map.set(arr[i], ++cnt);
    } else {
      map.set(arr[i], 1);
    }
  }

  map.forEach((value, key) => {
    if (value === 1) {
      output = key;
    }
  });
  return output;
};

console.log(outNumber(arrX), outNumber(arrY));
