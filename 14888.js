const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
const numArr = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);

const calculate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return 분수 어카냐
    default:
      return 0;
  }
};

const createOperators = (operators) => {
  const result = [];

  const permute = (arr, tempArr) => {
    if (arr.length === 0) {
      result.push(tempArr);
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        const copy = arr.slice(); // arr 복사본
        const temp = copy.splice(i, 1); // i에 해당되는 숫자 추출 (없애고)
        permute(copy.slice(), tempArr.concat(temp));
      }
    }
  };

  permute(operators, []);
  return result;
};

const namingDifficult = (numArr, operators) => {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < operators.length; i++) {
    let result = numArr[0];
    for (let j = 0; j < operators.length; j++) {
      result = calculate(result, numArr[j + 1], operators[i][j]);
    }

    if (result < min) min = result;
    if (result > max) max = result;
  }
  return [max, min];
};

const operatorList = [];
for (let i = 0; i < operators[0]; i++) operatorList.push("+");
for (let i = 0; i < operators[1]; i++) operatorList.push("-");
for (let i = 0; i < operators[2]; i++) operatorList.push("*");
for (let i = 0; i < operators[3]; i++) operatorList.push("/");

const afterOperators = createOperators(operatorList);
const [max, min] = namingDifficult(numArr, afterOperators);

console.log(max);
console.log(min);
