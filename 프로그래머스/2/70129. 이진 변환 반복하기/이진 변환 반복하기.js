function solution(s) {
  let convertCount = 0;
  let zeroCount = 0;

  while (s !== "1") {
    const ones = s.split("").filter((char) => char === "1");
    zeroCount += s.length - ones.length;

    s = ones.length.toString(2);
    convertCount++;
  }

  return [convertCount, zeroCount];
}


