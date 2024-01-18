function optimizeIntervals(intervals) {
  let result = intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i + 1][0] <= result[i][1]) {
      result.splice(i, 2, [
        Math.min(result[i][0], result[i + 1][0]),
        Math.max(result[i][1], result[i + 1][1]),
      ]);
      i -= 1;
    }
  }
  return result;
}
// [result[i + 1][0], result[i][0]][+(result[i][0] < result[i + 1][0])]
// [result[i + 1][1], result[i][1]][+(result[i][1] > result[i + 1][1])]
console.log(
  optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6],
  ])
);

function optimizeIntervals2(intervals) {
  let result = intervals.sort((a, b) => a[0] - b[0]);
  console.log(result.slice(1));

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i + 1][0] <= result[i][1]) {
      result[i] = [
        [
          Math.min(result[i][0], result[i + 1][0]),
          Math.max(result[i][1], result[i + 1][1]),
        ],
        result.slice(2),
      ];
      i -= 1;
    }
  }
  return result;
}

console.log(
  optimizeIntervals2([
    [2, 7],
    [3, 4],
    [5, 8],
  ])
);
