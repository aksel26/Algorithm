function solution(num_list) {
  let even = 0;
  let odd = 0;
  num_list.forEach((item, index) => {
    if (index % 2 === 0) even += item;
    else odd += item;
  });

  return Math.max(even, odd);
  console.log(odd, even);
  // return answer;
}
console.log(solution([4, 2, 6, 1, 7, 6]));
