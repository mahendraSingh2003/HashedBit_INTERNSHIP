
// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(a, b, operation) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return b !== 0 ? a / b : 'Cannot divide by zero';
    default:
      return 'Invalid operation';
  }
}

// Example:
console.log(calculate(10, 5, 'add'));      // 15
console.log(calculate(10, 5, 'divide'));   // 2
