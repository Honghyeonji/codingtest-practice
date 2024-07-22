const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split();
const n = Number(input);

const arr = [];

const hanoi = (n, a, b, c) => {
  if (n === 1) {
    arr.push(a + " " + c);
    return;
  }
  hanoi(n - 1, a, c, b); // n-1 원판들 strat -> not to
  arr.push(a + " " + c); // 맨 아래 start -> to
  hanoi(n - 1, b, a, c);
};

hanoi(n, "1", "2", "3");
console.log(arr.length);
console.log(arr.join("\n"));

// 7 127
// 8 255
// 9 511
// 10 1023
// 11 2047
// 12 4095
// 13 8191
// 14 16383
// 15 32767
// 16 65535
// 17 131071

// const count = (n) => {
//   if (n === 1) return n;
//   return 2 * count(n - 1) + 1;
// };
// console.log(count(20));
