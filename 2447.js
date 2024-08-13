// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const N = Number(input[0]);
const N = 9;
const arr = Array.from({ length: N }, () => Array(N).fill(" "));

const draw = (n, x, y) => {
  if (n === 1) arr[x][y] = "*";
  else {
    const t = Math.floor(n / 3);

    draw(t, x, y);
    draw(t, x + t, y);
    draw(t, x + t * 2, y);

    draw(t, x, y + t);
    draw(t, x + t * 2, y + t);

    draw(t, x, y + t * 2);
    draw(t, x + t, y + t * 2);
    draw(t, x + t * 2, y + t * 2);
  }
};

draw(N, 0, 0);

for (let i = 0; i < N; i++) {
  console.log(JSON.stringify(arr[i]).replace(/[\[\],"]/g, ""));
}
