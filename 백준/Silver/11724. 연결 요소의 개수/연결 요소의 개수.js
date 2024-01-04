// 문제 풀이

function solution(N, M, input) {
  let cnt = 0;

  const graph = Array.from(Array(N + 1), () => []);
  const visited = Array.from(Array(N + 1), () => false);

  for (let i = 0; i < M; i++) {
    let [a, b] = input[i];
    graph[a].push(b);
    graph[b].push(a);
  }

  const dfs = (a) => {
    if (!visited.includes(false)) {
      return;
    }

    for (const i of graph[a]) {
      if (visited[i] === false) {
        visited[i] = true;
        dfs(i);
      }
    }
  };

  for (let i = 1; i < N + 1; i++) {
    if (visited[i] === false) {
      cnt++;
      dfs(i);
    }
  }

  return cnt;
}

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

  input.push(line.split(" ").map((el) => parseInt(el)));
  //   input.push(line);
}).on("close", function () {
  // const N = input.shift();

  // const NUMBERS = input[0];
  //

  const [N, M] = input.shift();

  console.log(solution(N, M, input));

  process.exit(); // 프로세스 종료
});
