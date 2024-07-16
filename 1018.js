const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const chess_ver1 = [
//   ["W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W"],
//   ["W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W"],
//   ["W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W"],
//   ["W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W"],
// ];

// const chess_ver2 = [
//   ["B", "W", "B", "W", "B", "W", "B", "W"],
//   ["W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W"],
//   ["W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W"],
//   ["W", "B", "W", "B", "W", "B", "W", "B"],
//   ["B", "W", "B", "W", "B", "W", "B", "W"],
//   ["W", "B", "W", "B", "W", "B", "W", "B"],
// ];

function makeChess(p_1, p_2) {
  const board = [];
  for (let i = 0; i < 8; i++) {
    const rowArr = [];
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        rowArr.push(p_1);
      } else {
        rowArr.push(p_2);
      }
    }
    board.push(rowArr);
  }
  return board;
}

const chess_ver1 = makeChess("W", "B");
const chess_ver2 = makeChess("B", "W");

const [row, col] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => line.split(""));

let min = 10000;

for (let i = 0; i <= row - 8; i++) {
  for (let j = 0; j <= col - 8; j++) {
    let ver1_count = 0;
    let ver2_count = 0;
    for (let v = i; v < i + 8; v++) {
      for (let w = j; w < j + 8; w++) {
        if (chess_ver1[v - i][w - j] !== arr[v][w]) ver1_count++;
        if (chess_ver2[v - i][w - j] !== arr[v][w]) ver2_count++;
      }
    }
    if (ver1_count < min) min = ver1_count;
    if (ver2_count < min) min = ver2_count;
  }
}

console.log(min);
