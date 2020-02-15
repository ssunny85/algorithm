let input = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input = line.split(' ').map(a => parseInt(a, 10));
  })
  .on('close', function() {
    console.log(solve(input));
  });

/* 배열
 * https://www.acmicpc.net/problem/2920
 */
function solve(input) {
  let asc = true;
  let desc = true;

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] > input[i + 1]) {
      asc = false;
    } else {
      desc = false;
    }
  }

  if (asc) {
    return 'ascending';
  } else if (desc) {
    return 'descending';
  } else {
    return 'mixed';
  }
}
