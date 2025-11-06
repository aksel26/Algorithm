function solution(phone_book) {
  var answer = true;

  const sorted = phone_book.sort();

  for (let i = 0; i < sorted.length - 1; i++) {
    const first = sorted[i];
    const next = sorted[i + 1];

    if (next.startsWith(first)) answer = false;
  }

  return answer;
}