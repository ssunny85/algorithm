// 정렬 (https://programmers.co.kr/learn/courses/30/lessons/42748)
function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i += 1) {
    let temp = commands[i];
    const start = temp[0];
    const end = temp[1];
    const target = temp[2];

    if (array.length >= 3) {
      const newArr = array.slice((start - 1), end).sort((a, b) => a - b);
      answer.push(newArr[target - 1]);
    }
  }

  return answer;
}

// 참고!! sort() 정렬은 문자열 기준으로 숫자의 정렬은 (a, b) => a - b 로 사용
const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands));
