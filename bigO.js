{
  // 빅 오 표기법 O(n)
  // O(1) < O(logn) < O(n) < O(nlogn) < O(n제곱) < O(2n제곱) < O(n!)

  /** 예제1)
   * 1부터 n까지의 합을 구하는 알고리즘1 -> O(n)
   */
  function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sum(100));

  /** 예제2)
   * 1부터 n까지의 합을 구하는 알고리즘2 -> O(1)
   * O(n)보다 O(1)이 시간복잡도에서 더 좋다(반복문이 있는지 없는지의 차이)
   */
  function sum2(n) {
    return n * (n + 1) / 2
  }
  console.log(sum2(100));
}
