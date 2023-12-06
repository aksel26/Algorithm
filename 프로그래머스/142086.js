function solution(s) {
  var answer = [];

  let temp = [...s];
  let pointer = 1;
  answer.push(-1);
  while (pointer !== s.length) {
    answer.push(s.slice(0, pointer).indexOf(temp[pointer]));
    pointer++;
  }

  console.log("answer: ", answer);
  return answer;
}

solution("foobar");
