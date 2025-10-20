function solution(n, words) {
  // 첫번째 글자만 추출
  const firstElement = (word) => {
    return word.at(0);
  };
  // 마지막 글자만 추출
  const lastElement = (word) => {
    return word.at(-1);
  };

  // 단어 저장 Set
  const wordSet = new Set();

  // 중복 단어 체크
  const isDuplicate = (word) => {
    if (wordSet.has(word)) return true;
    else return false; // ← return 추가!
  };

  for (let i = 0; i < words.length; i++) {
    // 중복 체크 (현재 단어가 이미 나왔는지)
    if (isDuplicate(words[i])) {
      const person = (i % n) + 1; // ← 사람 번호
      const cycle = Math.floor(i / n) + 1; // ← 차례
      return [person, cycle];
    }

    // 끝말잇기 규칙 체크 (i > 0일 때만)
    if (i > 0) {
      const last = lastElement(words[i - 1]);
      const first = firstElement(words[i]);

      if (last !== first) {
        const person = (i % n) + 1; // ← 사람 번호
        const cycle = Math.floor(i / n) + 1; // ← 차례
        return [person, cycle];
      }
    }

    wordSet.add(words[i]);
  }

  // 탈락자가 없는 경우
  return [0, 0];
}