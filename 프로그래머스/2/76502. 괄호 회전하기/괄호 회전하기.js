function checkPair(str) {

  const pushString = ["(", "{", "["];


  const isValidStart = pushString.includes(str[0]);

  if (!isValidStart) return false;

  let stack = [];
  const pairs = { "(": ")", "{": "}", "[": "]" };

  for (let char of str) {
    // 여는 괄호면 스택에 push
    if (pairs[char]) {
      stack.push(char);
    }
    // 닫는 괄호면
    else {
      const last = stack.pop();
      if (pairs[last] !== char) return false;
    }
  }

  return stack.length === 0; // 스택이 비어있어야 올바른 괄호

}

function solution(s) {
  let answer = 0;

  const arr = Array.from(s);

  for (let i = 0; i < arr.length; i++) {
    if (checkPair(s)) answer++;
    s = s.slice(1) + s[0]; // 왼쪽으로 1칸 회전

    
  }
  return answer;
}

