function solution(num_list, n) {
  return [...num_list.slice(n), ...num_list.slice(0, n)];
}

console.log(solution([5, 2, 1, 7, 5], 3));
