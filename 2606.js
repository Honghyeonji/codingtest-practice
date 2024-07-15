readline = require("readline");
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let graph = {};
let computer_n = -1;
let network_n = -1;

rl.on("line", function (line) {
  if (computer_n === -1) {
    computer_n = Number(line); // 첫째줄에 컴퓨터 개수 받은 후에는 여기 안 걸림
  } else if (network_n === -1) {
    network_n = Number(line); // 둘째줄에 네트워크 개수 받으면 여기 안 걸림
  } else if (network_n > 0) {
    // 네트워크 개수 받은 이후 개수만큼 line 읽어옴
    let arr = line.split(" ").map(Number);
    start = arr[0];
    dest = arr[1];
    // 읽어온 라인은 바로 graph 처리
    // {1:[2,3~], 2:[4,5, ~]} 이런식으로 정리하고 dfs 실행하려고
    if (!graph[start]) graph[start] = [];
    if (!graph[dest]) graph[dest] = []; // graph[x] => null or undefined에 push하면 오류나니 없으면 []추가
    graph[start].push(dest);
    graph[dest].push(start);
    network_n--;
  }

  if (network_n === 0) {
    // 네트워크 개수만큼 라인 읽어온 후 읽는 거 종료
    rl.close();
  }
});

rl.on("close", () => {
  console.log(dfs(graph, 1));
  process.exit();
});

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length > 0) {
    const item = stack.pop();
    if (!visited.includes(item)) {
      visited.push(item);
      if (graph[item]) stack.push(...graph[item]); // 이렇게 푸쉬하면 array 자체가 요소로 푸쉬되는 게 아니라 array안의 요소들이 푸쉬 됨
    }
  }

  return visited.length - 1;
}
