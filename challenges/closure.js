// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  //  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    //    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation: When nestedFunction is invoked in can reach outside it's lexical scope to gather information, functions cannot reach in but they can reach out.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num1) {
  let sum1 = 0;
  for (i = 0; i <= num1; i++) {
    sum1 = sum1 + i;
  }
  return sum1;
}

const sum2 = summation(4);

//console.log(sum2);
