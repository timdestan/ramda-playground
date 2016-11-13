const R = require('ramda');

const fizzbuzz = (n) => {
  const divides3 = n % 3 == 0;
  const divides5 = n % 5 == 0;
  if (divides3 && divides5) {
    return "FizzBuzz";
  } else if (divides3) {
    return "Fizz";
  } else if (divides5) {
    return "Buzz";
  } else {
    return String(n);
  }
};

console.log(R.map(fizzbuzz, R.range(1, 100)));
