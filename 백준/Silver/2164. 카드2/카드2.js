const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

// Node 클래스 - 각 노드는 데이터와 다음 노드에 대한 참조를 가짐
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList 클래스
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // 리스트 끝에 노드 추가
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // 첫 번째 노드 삭제 및 데이터 반환
  removeFirst() {
    if (!this.head) return null;

    const data = this.head.data;
    this.head = this.head.next;
    
    if (!this.head) {
      this.tail = null;
    }
    
    this.size--;
    return data;
  }

  // 리스트 크기 반환
  getSize() {
    return this.size;
  }

  // 첫 번째 노드의 데이터 반환
  getFirst() {
    return this.head ? this.head.data : null;
  }
}

const cards = new LinkedList();

for (let i = 1; i <= Number(input); i++) {
  cards.append(i);
}

while (cards.getSize() > 1) {
  cards.removeFirst();
  cards.append(cards.removeFirst());
}

console.log(cards.getFirst());
