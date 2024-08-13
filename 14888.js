const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
const numArr = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);
let min = Infinity;
let max = Number.MIN_SAFE_INTEGER;

const backtracking = (n, operators, sum) => {
  if (n === N - 1) {
    if (max < sum) max = sum;
    if (min > sum) min = sum;
  }

  if (operators[0] > 0) {
    operators[0] -= 1;
    backtracking(n + 1, operators, sum + numArr[n + 1]);
    operators[0] += 1;
  }
  if (operators[1] > 0) {
    operators[1] -= 1;
    backtracking(n + 1, operators, sum - numArr[n + 1]);
    operators[1] += 1;
  }
  if (operators[2] > 0) {
    operators[2] -= 1;
    backtracking(n + 1, operators, sum * numArr[n + 1]);
    operators[2] += 1;
  }
  if (operators[3] > 0) {
    operators[3] -= 1;
    backtracking(
      n + 1,
      operators,
      sum < 0
        ? -Math.floor(-sum / numArr[n + 1])
        : Math.floor(sum / numArr[n + 1])
    );
    operators[3] += 1;
  }
};

backtracking(0, operators, numArr[0]);
console.log(max ? max : 0);
console.log(min ? min : 0);
// https://www.acmicpc.net/board/view/74572
// -0으로 출력된다. 자바스크립트의 number가 실수형이라서 +0과 -0이 나온다고 합니다.
// 그래서 -0으로 출력되는걸 0으로 고치게 한 코드입니다. -0과 0은 같습니다. 하지만 정답이 아니라서 오류가 난거죠
