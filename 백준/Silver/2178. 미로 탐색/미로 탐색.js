let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const maze = input.slice(1).map((item) => item.split("").map(Number));

function bfs2D(grid, startRow, startCol) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queue = [[startRow, startCol, 1]]; // 거리 정보 추가 (시작점 포함 1)
  visited[startRow][startCol] = true;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    // 목적지 도달 시 거리 반환
    if (row === rows - 1 && col === cols - 1) {
      return distance;
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !visited[newRow][newCol] && grid[newRow][newCol] === 1) {
        visited[newRow][newCol] = true;
        queue.push([newRow, newCol, distance + 1]); // 거리 +1
      }
    }
  }

  return -1; // 도달 불가능한 경우
}

console.log(bfs2D(maze, 0, 0));
