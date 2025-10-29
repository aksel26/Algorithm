function solution(want, number, discount) {
  var answer = 0;

  const bucketMap = new Map();

  want.forEach((list, index) => {
    bucketMap.set(list, number[index]);
  });

  const RANGE = 10;

  const compare = (tempMap) => {
    let result = true;
    [...bucketMap.keys()].forEach((bucket) => {
      if (!tempMap.has(bucket)) return (result = false);
      else {
        if (tempMap.get(bucket) !== bucketMap.get(bucket)) {
          return (result = false);
        }
      }
    });
    return result;
  };

  for (let i = 0; i <= discount.length - RANGE; i++) {
    let tempMap = new Map();

    for (let j = i; j < i + RANGE; j++) {
      let current = discount[j];
      if (tempMap.has(current)) {
        tempMap.set(current, tempMap.get(current) + 1 || 1);
      } else {
        tempMap.set(current, 1);
      }
    }

    if (compare(tempMap)) answer++;

    tempMap.clear();

    // for (const sales of discount) {

    // }
  }

  return answer;
}
