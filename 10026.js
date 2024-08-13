const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(""));

const checkPart = (isblindness = false) => {
  //   const tempArr = Array.from({ length: N }, () => Array(N).fill(0));
  let count = 0;
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const stack = [];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const valid = (x, y) => {
    return x >= 0 && x < N && y >= 0 && y < N;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        count++;
        stack.push([i, j]);
        visited[i][j] = true;

        while (stack.length !== 0) {
          const node = stack.pop();
          const color = arr[node[0]][node[1]];
          for (const dir of directions) {
            const x = node[0] + dir[0];
            const y = node[1] + dir[1];
            if (valid(x, y) && !visited[x][y]) {
              if (isblindness) {
                if (
                  (color === "R" || color === "G") &&
                  (arr[x][y] === "R" || arr[x][y] === "G")
                ) {
                  stack.push([x, y]);
                  visited[x][y] = true;
                } else if (arr[x][y] === color) {
                  stack.push([x, y]);
                  visited[x][y] = true;
                }
              } else {
                if (arr[x][y] === color) {
                  stack.push([x, y]);
                  visited[x][y] = true;
                }
              }
            }
          }
        }
      }
    }
  }
  return count;
};

const notBlindness = checkPart();
const blindness = checkPart(true);
console.log(`${notBlindness} ${blindness}`);
