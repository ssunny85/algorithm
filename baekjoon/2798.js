let lines = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    lines.push(line);
  })
  .on('close', function() {
    const firstLine = lines[0].split(' ');
    const n = parseInt(firstLine[0], 10);
    const m = parseInt(firstLine[1], 10);
    const arr = lines[1].split(' ').map(input => parseInt(input, 10));
    console.log(solve(n, m, arr));
  });

// 완전탐색 => 경우의 수 구하기
// 최대 100개의 카드에서 3개의 카드를 뽑는 경우 (100*99*98/3*2*1)
function solve(n, m, arr) {
  let result = 0;
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      for(let k = j + 1; k < n; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        if(sum <= m) {
          result = Math.max(result, sum); // result, sum 중 최대값을 result에 반환한다.
        }
      }
    }
  }
  return result;
}
