Here is a JavaScript code that calculates the Fibonacci sequence up to a given number, providing a more advanced example:

```javascript
// fibonacci.js

// Function to generate the Fibonacci sequence
function generateFibonacciSequence(number) {
  var fibSeq = [0, 1];
  
  for (var i = 2; i < number; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
  }
  
  return fibSeq;
}

// Function to print the Fibonacci sequence
function printFibonacciSequence(fibSeq) {
  console.log("Fibonacci Sequence:");
  console.log("--------------------");
  
  for (var i = 0; i < fibSeq.length; i++) {
    console.log(fibSeq[i]);
  }
}

// Entry point
function main() {
  var number = parseInt(prompt("Enter the number up to which you want to generate the Fibonacci sequence:"));
  
  if (!isNaN(number)) {
    var fibonacciSequence = generateFibonacciSequence(number);
    printFibonacciSequence(fibonacciSequence);
  } else {
    console.log("Invalid input! Please enter a number.");
  }
}

// Run the code
main();
```

This code calculates the Fibonacci sequence up to a given number provided by the user. It uses two functions - `generateFibonacciSequence()` to calculate the sequence and `printFibonacciSequence()` to print it. The program asks the user for input, generates the sequence, and displays it on the console.

Note: The code provided has comments that explain the purpose of each section to improve readability.