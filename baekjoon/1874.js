let lines = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    lines.push(line);
  })
  .on('close', function () {
    const n = parseInt(lines[0], 10);
    const arr = lines.slice(1).map(s => parseInt(s, 10));
    const result = solve(n, arr);
    console.log(result);
  });

/* stack
 * https://www.acmicpc.net/problem/1874
 */
function solve(n, arr) {
  const plus = '+';
  const minus = '-';
  let result = [];
  let stack = [];

  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    while (count <= num) {
      stack.push(count);
      result.push(plus);
      count += 1;
    }

    if (stack.length > 0 && num === stack[stack.length - 1]) {
      stack.pop();
      result.push(minus);
    } else {
      return 'NO';
    }
  }

  return result.join('\n');
}
