//  You need to write a function findTax() that takes a number type variable as an argument
//  which is the salary of a person. You need to calculate the tax amount on his salary by 
// using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.



function findTax(salary) {
  let taxRate;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      return 'Invalid salary';
  }

  const tax = salary * taxRate;
  return tax;
}

// Example:
console.log(findTax(450000));   // 0
console.log(findTax(1200000));  // 240000
