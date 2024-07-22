const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [row, col] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

const wall = (count) => {
  if (count === 0) {
    virusCheck();
    return;
  } else {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (arr[i][j] === 0) {
          arr[i][j] = 1;
          wall(count - 1);
          arr[i][j] = 0;
        }
      }
    }
  }
};

let max = 0;

const virusCheck = () => {
  const copyArr = arr.map((row) => row.slice());
  let count = 0;
  const visited = new Set();
  const queue = [];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (copyArr[i][j] === 2 && !visited.has(`${i},${j}`)) {
        queue.push([i, j]);
        while (queue.length !== 0) {
          const node = queue.shift();
          if (!visited.has(`${node[0]},${node[1]}`)) {
            visited.add(`${node[0]},${node[1]}`);
            copyArr[node[0]][node[1]] = 2;
            for (const [x, y] of directions) {
              const nx = node[0] + x;
              const ny = node[1] + y;
              if (
                nx >= 0 &&
                nx < row &&
                ny >= 0 &&
                ny < col &&
                copyArr[nx][ny] === 0
              ) {
                queue.push([nx, ny]);
              }
            }
          }
        }
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (copyArr[i][j] === 0) count++;
    }
  }
  if (count > max) max = count;
};

wall(3);
console.log(max);
