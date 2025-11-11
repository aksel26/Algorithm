function solution(record) {
  var answer = [];

  const command = new Map();

  for (let i = 0; i < record.length; i++) {
    const element = record[i];
    const input = element.split(" ");
    const status = input[0];

    if (status === "Enter" || status === "Change") {
      const id = input[1];
      const name = input[2];
      command.set(id, name);
    }
  }

  for (let i = 0; i < record.length; i++) {
    const element = record[i];
    const input = element.split(" ");
    const status = input[0];

    if (status === "Enter") {
      const id = input[1];
      const name = command.get(id);

      answer.push(name + "님이 들어왔습니다.");
    } else if (status === "Leave") {
      const id = input[1];
      const name = command.get(id);

      answer.push(name + "님이 나갔습니다.");
    }
  }

  return answer;
}
