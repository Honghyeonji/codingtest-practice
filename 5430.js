// // const fs = require("fs");
// // const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// // const T = Number(input[0]);
// // // const arr = [];
// // let index = 1;
// // for (let i = 0; i < T; i++) {
// //   //   const n = Number(input[index]);
// //   const str = input[index + 1];
// //   const tempArr = JSON.parse(input[index + 2]);

// //   //   arr.push([str, n, tempArr]);
// //   index += 3;

// //   console.log(ac(str, tempArr));
// // }

// const T = 4;
// arr = [
//   ["RDD", 4, [1, 2, 3, 4]],
//   ["DD", 1, [42]],
//   ["RRD", 6, [1, 1, 2, 3, 5, 8]],
//   ["D", 0, []],
// ];

// const ac = (command, arr) => {
//   //   const command = caseArr[0].split("");
//   //   //   let n = caseArr[1];
//   //   let arr = tempArr.slice();
//   let modeStart = true;

//   for (let i = 0; i < command.length; i++) {
//     if (command[i] === "R") {
//       modeStart = !modeStart;
//     }
//     if (command[i] === "D") {
//       if (arr.length === 0) {
//         return "error";
//       } else {
//         if (modeStart) arr.shift();
//         arr.pop();
//       }
//     }
//   }
//   if (!modeStart) arr.reverse();
//   return arr;
// };

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const ac = (command, arr) => {
  let modeStart = true;

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "R") {
      modeStart = !modeStart;
    }
    if (command[i] === "D") {
      if (arr.length === 0) {
        return "error";
      } else {
        if (modeStart) arr.shift();
        else arr.pop();
      }
    }
  }
  if (!modeStart) arr.reverse();
  return arr;
};

const T = Number(input[0]);
let index = 1;
for (let i = 0; i < T; i++) {
  const str = input[index + 1];
  const tempArr = JSON.parse(input[index + 2]);

  index += 3;
  console.log(ac(str, tempArr));
}

// for (let i = 0; i < T; i++) {
//   console.log(ac(arr[i][0], arr[i][2]));
// }
