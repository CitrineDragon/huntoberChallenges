// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log(`${i} Fizz Buzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} Buzz`);
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

function fizzUpgrade(num) {
  let numArr = Array.from(Array(num).keys());
  return numArr.map((el) =>
    el % 15 === 0
      ? console.log(`${i} Fizz Buzz`)
      : el % 3 === 0
      ? console.log(`${i} Fizz`)
      : el % 5 === 0
      ? console.log(`${i} Buzz`)
      : console.log(i)
  );
}

fizzUpgrade(15);
