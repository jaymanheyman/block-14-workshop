// loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) { 
    // check if i is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) { // check if i is divisible by both 3 and 5
     // if yes, print "FizzBuzz"
        console.log("FizzBuzz"); 
    } else if (i % 3 === 0) { // if not, check if i is divisible by 3 only
      console.log("Fizz"); // if yes, print "Fizz"
    // if not, check if i is divisible by 5 only
    console.log("Buzz"); // if yes, print "Buzz"
    } else if (i % 5 === 0) { 
    // if i is not divisible by either 3 or 5
      // print the number i itself
    } else { 
        console.log(i); 
    }
  }
  