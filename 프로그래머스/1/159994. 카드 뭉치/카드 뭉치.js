function solution(cards1, cards2, goal) {
  var answer = "Yes";

  goal.forEach((word) => {
    if (cards1[0] === word) {
      cards1.shift();
    } else if (cards2[0] === word) {
      cards2.shift();
    } else if (cards1[0] !== word && cards2[0] !== word) {
      return (answer = "No");
    }
  });
  return answer;
}