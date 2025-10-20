function solution(s) {
  var answer = "";

  temp = s
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  answer = `${temp[0]} ${temp.at(-1)}`;
  return answer;
}