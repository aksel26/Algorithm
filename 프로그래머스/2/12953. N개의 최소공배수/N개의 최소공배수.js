function GCD(a, b) {
  if (b === 0) return a;

  return GCD(b, a % b);
}

function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

function solution(arr) {
  var answer = 0;

  answer = arr.reduce((acc, cur) => LCM(acc, cur));

  return answer;
}

console.log(solution([2, 6, 8, 14]));
