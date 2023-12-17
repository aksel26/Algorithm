const solution = (s) => {
  const date_array = s.slice(0, s.length - 2).split(":");

  if (s.slice(s.length - 2) == "PM") {
    date_array[0] != "12" && (date_array[0] = Number(date_array[0]) + 12);
  } else {
    date_array[0] == "12" && (date_array[0] = "00");
  }
  return date_array.join(":");
};

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  //   input = line; // 입력받은 문자열, line
  //   input = parseInt(line); // 형변환, parseInt
  //   rl.close(); // 입력 종료

  input = line;
  //   input.push(line);
}).on("close", function () {
  console.log(solution(input));
  process.exit(); // 프로세스 종료
});
