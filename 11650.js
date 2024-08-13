const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input.shift());

const points = [];
for (let i = 0; i < N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  points.push([x, y]);
}

points.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

console.log(points.map((point) => `${point[0]} ${point[1]}`).join("\n"));
