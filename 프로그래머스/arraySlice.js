function solution(arr, query) {
  query.forEach((item, index) => {
    if (index % 2 === 0) {
      arr = arr.slice(0, item + 1);
    } else {
      arr = arr.slice(item);
    }
  });

  return arr;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2]));
