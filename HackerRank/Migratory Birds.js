const solution = (N, input) => {
  let map = new Map();
  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < input.length; i++) {
    if (map.has(input[i])) {
      let cnt = map.get(input[i]);
      cnt += 1;
      map.set(input[i], cnt);
    } else {
      map.set(input[i], 1);
    }
  }

  let max = Math.max(...map.values());
  map.forEach((item, key) => {
    if (item === max) {
      if (key < answer) answer = key;
    }
  });
  return answer;
};

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  //   input = line; // 입력받은 문자열, line
  //   input = parseInt(line); // 형변환, parseInt
  //   rl.close(); // 입력 종료

  input.push(line.split("\n"));

  //   input.push(line);
}).on("close", function () {
  const N = input[0];
  const numbers = input[1][0].split(" ").map(Number);

  console.log(solution(N, numbers));

  process.exit(); // 프로세스 종료
});
