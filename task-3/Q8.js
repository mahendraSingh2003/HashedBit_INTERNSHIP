// Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.




function repeatedSum(num) {
  while (num >= 10) {
    num = num.toString().split('').reduce((sum, d) => sum + Number(d), 0);
  }
  return num;
}

console.log(repeatedSum(456));  // 6
