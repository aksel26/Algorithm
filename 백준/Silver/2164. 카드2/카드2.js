const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

// Node 클래스 - 각 노드는 데이터, 이전 노드, 다음 노드에 대한 참조를 가짐
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// DoublyLinkedList 클래스
class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // 특정 인덱스의 노드 삭제
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;

    // 첫 번째 노드 삭제
    if (index === 0) {
      this.head = current.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    }
    // 마지막 노드 삭제
    else if (index === this.size - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    }
    // 중간 노드 삭제
    else {
      let count = 0;
      while (count < index) {
        current = current.next;
        count++;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.size--;
    return current.data;
  }

  // 리스트가 비었는지 확인
  isEmpty() {
    return this.size === 0;
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

const cards = new DoublyLinkedList();

for (let i = 1; i <= Number(input); i++) {
  cards.append(i);
}

while (cards.getSize() !== 1) {
  cards.removeAt(0);
  cards.append(cards.getFirst());
  cards.removeAt(0);
}

console.log(cards.getFirst());
