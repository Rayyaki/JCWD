// ===== SOAL 1======

function excelColumnToNumber(column) {
  let result = 0;
  for (let i = 0; i < column.length; i++) {
    let charCode = column.charCodeAt(i) - 64;
    // console.log(charCode);
    result = result * 26 + charCode;
    // console.log(result);
  }
  return result;
}
console.log("no 1");
console.log(excelColumnToNumber("AB"));

// ==================================================================

// soal no 2

function findSingleNumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]; // menggunakan operator bitwise XOR untuk mencari nilai yang unik
  }
  return result;
}
console.log("no 2");
console.log(findSingleNumber([5, 5, 5, 5, 1, 1, 1, 3]));

// =================================================================

// soal no 4

function climbStairs(n) {
  if (n <= 1) {
    return 1;
  }
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // menggunakan formula dynamic programming
  }
  return dp[n];
}
console.log("no 3");
console.log(climbStairs(5));

// ==================================================================
