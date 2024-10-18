const testCases = [{ answers: [5, 2, 3] }, { answers: [1, 5, 3, 9, 6, 1] }];
for (const testCase of testCases) {
  poll.displayResults.call(testCase, "array");
  poll.displayResults.call(testCase, "string");
}
