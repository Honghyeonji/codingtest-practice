const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(""));

const quadTree = (n, x, y) => {
  if (n === 1) {
    return arr[x][y];
  }

  let temp = [null, null, null, null];

  const t = Math.floor(n / 2);

  temp[0] = quadTree(t, x, y);
  temp[1] = quadTree(t, x, y + t);
  temp[2] = quadTree(t, x + t, y);
  temp[3] = quadTree(t, x + t, y + t);

  if (
    !(
      temp[0] === temp[1] &&
      temp[1] === temp[2] &&
      temp[2] === temp[3] &&
      temp[3] === temp[0]
    ) ||
    /[\(\)]/.test(`${temp[0]}${temp[1]}${temp[2]}${temp[3]}`)
  ) {
    return `(${temp[0]}${temp[1]}${temp[2]}${temp[3]})`;
  } else {
    return temp[0];
  }
};

console.log(quadTree(N, 0, 0));
