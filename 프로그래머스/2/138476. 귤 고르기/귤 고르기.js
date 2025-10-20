function solution(k, tangerine) {
  const tangerines = new Map();

  for (let i = 0; i < tangerine.length; i++) {
    tangerines.set(tangerine[i], 0);
  }

  tangerine.forEach((element) => {
    tangerines.set(element, tangerines.get(element) + 1);
  });

  const sorted = [...tangerines].sort((a, b) => {
    return b[1] - a[1];
  });

  let reuslt = [];

  const sortedMap = new Map(sorted);

  let sum = 0;
  for (const element of sortedMap) {
    let [weight, count] = element;

    if (sum < k) {
      sum += count;

      reuslt.push(weight);
    }

    if (sum === k) break;
  }
  return reuslt.length;
}