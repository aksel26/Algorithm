function solution(names) {
  return names.filter((item, index) => index % 5 === 0 && item);
}
console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
);
