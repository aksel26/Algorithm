function solution(name, yearning, photo) {
  let answer = [];
  let mapData = new Map();

  name.forEach((item, index) => {
    mapData.set(item, yearning[index]);
  });

  photo.forEach((arr) => {
    let sum = 0;
    arr.forEach((name) =>
      mapData.has(name) ? (sum = sum + mapData.get(name)) : null
    );

    answer.push(sum);
  });

  return answer;
}

// solution(
//   ["may", "kein", "kain", "radi"],
//   [5, 10, 1, 3],
//   [
//     ["may", "kein", "kain", "radi"],
//     ["may", "kein", "brin", "deny"],
//     ["kon", "kain", "may", "coni"],
//   ]
// );
solution(
  ["kali", "mari", "don"],
  [11, 1, 55],
  [
    ["kali", "mari", "don"],
    ["pony", "tom", "teddy"],
    ["con", "mona", "don"],
  ]
);
