const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const city = input.slice(1).map((line) => line.split(" ").map(Number));

const houses = [];
const chickenShops = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 1) {
      houses.push([i, j]);
    } else if (city[i][j] === 2) {
      chickenShops.push([i, j]);
    }
  }
}

const getDistance = (house, shop) =>
  Math.abs(house[0] - shop[0]) + Math.abs(house[1] - shop[1]);

const chickenDistance = (selectedChickenShops) => {
  let totalDistance = 0;
  for (const house of houses) {
    let minDistance = Infinity;
    for (const shop of selectedChickenShops) {
      minDistance = Math.min(minDistance, getDistance(house, shop));
    }
    totalDistance += minDistance;
  }
  return totalDistance;
};

const dfs = (index, selected, M) => {
  if (selected.length === M) {
    const distance = chickenDistance(selected);
    minDistance = Math.min(minDistance, distance);
    return;
  }
  if (index >= chickenShops.length) return;

  dfs(index + 1, selected, M);

  selected.push(chickenShops[index]);
  dfs(index + 1, selected, M);
  selected.pop();
};

let minDistance = Infinity;

dfs(0, [], M);

console.log(minDistance);
