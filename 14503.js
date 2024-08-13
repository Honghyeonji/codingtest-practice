const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [r, c, d] = input[1].split(" ").map(Number);
const arr = input.slice(2).map((line) => line.split(" ").map(Number));

console.log(arr);

function robotCleaner(N, M, r, c, d, arr) {
  let cleaned = Array.from(Array(N), () => Array(M).fill(0));
  let count = 0;

  const checkIndex = (r, c) => {
    return r >= 0 && r < N && c >= 0 && c < M;
  };

  while (true) {
    if (cleaned[r][c] === 0) {
      cleaned[r][c] = 1;
      count++;
    }

    let tempD = (d + 3) % 4;
    let booleanCheck = false;
    for (let i = 0; i < 4; i++) {
      if (
        tempD === 0 &&
        cleaned[r - 1][c] === 0 &&
        arr[r - 1][c] === 0 &&
        checkIndex(r - 1, c)
      ) {
        d = tempD;
        r--;
        booleanCheck = true;
        break;
      }
      if (
        tempD === 1 &&
        cleaned[r][c + 1] === 0 &&
        arr[r][c + 1] === 0 &&
        checkIndex(r, c + 1)
      ) {
        d = tempD;
        c++;
        booleanCheck = true;
        break;
      }
      if (
        tempD === 2 &&
        cleaned[r + 1][c] === 0 &&
        arr[r + 1][c] === 0 &&
        checkIndex(r + 1, c)
      ) {
        d = tempD;
        r++;
        booleanCheck = true;
        break;
      }
      if (
        tempD === 3 &&
        cleaned[r][c - 1] === 0 &&
        arr[r][c - 1] === 0 &&
        checkIndex(r, c - 1)
      ) {
        d = tempD;
        c--;
        booleanCheck = true;
        break;
      }
      tempD = (tempD + 3) % 4;
    }

    if (!booleanCheck) {
      let backD = (d + 2) % 4;
      if (backD === 0) {
        r--;
      } else if (backD === 1) {
        c++;
      } else if (backD === 2) {
        r++;
      } else if (backD === 3) {
        c--;
      }

      if (arr[r][c] === 1) break;
    }
  }

  return count;
}

console.log(robotCleaner(N, M, r, c, d, arr));
