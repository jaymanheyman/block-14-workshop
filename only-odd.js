// creat an array of numbers 
let numbers = [2, 4, 6, 8, 11, 20, 15, 22];

//initialize an empty array 
let oddNumbers = [];

/* the loop will check to see if a number is odd by dividing
the number by 2 and if the remainder is not zero then
the number is odd. */
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];

  if (number % 2 !== 0) {
    /* If the current number is odd, add it to the
oddNumbers array using the push method. */
    oddNumbers.push(number);
  }
}
// Print the odd numbers to the console. 
console.log(oddNumbers); // Output: [11, 15]
