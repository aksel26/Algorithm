function solution(topping) {
  let answer = 0;
  const rightMap = new Map();
  const leftMap = new Map();
  for (let i = 0; i < topping.length; i++) {
    if (rightMap.has(topping[i])) {
      rightMap.set(topping[i], rightMap.get(topping[i]) + 1);
    } else {
      rightMap.set(topping[i], 1);
    }
  }

  for (let i = 0; i < topping.length - 1; i++) {
    if (leftMap.has(topping[i])) {
      leftMap.set(topping[i], leftMap.get(topping[i]) + 1);
    } else {
      leftMap.set(topping[i], 1);
    }

    if (rightMap.has(topping[i])) {
      rightMap.set(topping[i], rightMap.get(topping[i]) - 1);
    }

    if (rightMap.get(topping[i]) === 0) {
      rightMap.delete(topping[i]);
    }

    if (leftMap.size === rightMap.size) {
      answer++;
    }
    // leftMap.set(topping[i])
  }

  return answer;
}
