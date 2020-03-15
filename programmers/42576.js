// hash (https://programmers.co.kr/learn/courses/30/lessons/42576)
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i += 1) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

const participant = ['leo', 'kiki', 'eden'];
const completion = ['eden', 'kiki'];
const participant2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion2 = ['josipa', 'filipa', 'marina', 'nikola'];
const participant3 = ['mislav', 'stanko', 'mislav', 'ana'];
const completion3 = ['stanko', 'ana', 'mislav'];
console.log('1: ', solution(participant, completion));
console.log('2: ', solution(participant2, completion2));
console.log('3: ', solution(participant3, completion3));
