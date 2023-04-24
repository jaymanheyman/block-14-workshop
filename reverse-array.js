const originalArray = [1, 2, 3, 4, 5];
const reversedArray = [];

// Loop through the original array in reverse order and push each element into the new array
for (let i = originalArray.length - 1; i >= 0; i--) {
  if (originalArray[i]) {
    reversedArray.push(originalArray[i]);
  } else if (originalArray[i] === 0) {
    reversedArray.push(originalArray[i]);
  } else if (originalArray[i] === null) {
    reversedArray.push(originalArray[i]);
  } else if (originalArray[i] === undefined) {
    reversedArray.push(originalArray[i]);
  } else {
    // If the element is undefined, null, 0 or false, skip it and do not add it to the reversed array
  }
}

console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
