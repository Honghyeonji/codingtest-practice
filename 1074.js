const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

let [N, r, c] = input[0].split(" ").map(Number);
N = 2 ** N;
const arr = Array.from({ length: N }, () => Array(N).fill(" "));

let count = 0;

const recursion = (n, x, y) => {
  if (n === 1) {
    arr[x][y] = count;
    count++;
    return;
  }

  const t = Math.floor(n / 2);

  recursion(t, x, y);
  recursion(t, x, y + t);
  recursion(t, x + t, y);
  recursion(t, x + t, y + t);
};

recursion(N, 0, 0);
console.log(arr[r][c]);
