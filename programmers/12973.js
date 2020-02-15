// stack(https://programmers.co.kr/learn/courses/30/lessons/12973)
function solution(s) {
  let answer = null;
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (!arr.length) {
      arr.push(s[i]);
    } else {
      if(s[i] === arr[arr.length - 1]) {
        arr.pop();
      } else {
        arr.push(s[i]);
      }
    }
  }

  if(arr.length > 0) {
    answer = 0;
  } else {
    answer = 1;
  }
  console.log(answer);
  return answer;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));
