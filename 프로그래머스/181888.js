function solution(num_list, n) {
  return num_list
    .map((item, index) => index % n === 0 && item)
    .filter((item) => item);
}

console.log(solution([4, 2, 6, 1, 7, 6], 2));
