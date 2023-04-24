// Initialize an array of words 
const words = ["hello", "ukelele", "awesome"];

// loop through each word in the array
for (let i = 0; i < words.length; i++) {
  /* initialize variables to count the number of vowels
   and consonants */
  let word = words[i];
  let numVowels = 0;
  let numConsonants = 0;

  // loop through each letter in the word
  for (let j = 0; j < word.length; j++) {
    let character = word[j];
    //checking for vowels, increment by 1 for each vowel
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    ) {
      numVowels++;
     //checking for consonants, increment by 1 for each one   
    } else if (
      character === "B" ||
      character === "C" ||
      character === "D" ||
      character === "F" ||
      character === "G" ||
      character === "H" ||
      character === "J" ||
      character === "K" ||
      character === "L" ||
      character === "M" ||
      character === "N" ||
      character === "P" ||
      character === "Q" ||
      character === "R" ||
      character === "S" ||
      character === "T" ||
      character === "V" ||
      character === "W" ||
      character === "X" ||
      character === "Y" ||
      character === "Z"
    ) {
      numConsonants++;
      //checking for lowercase consonants
    } else if (
      character === "b" ||
      character === "c" ||
      character === "d" ||
      character === "f" ||
      character === "g" ||
      character === "h" ||
      character === "j" ||
      character === "k" ||
      character === "l" ||
      character === "m" ||
      character === "n" ||
      character === "p" ||
      character === "q" ||
      character === "r" ||
      character === "s" ||
      character === "t" ||
      character === "v" ||
      character === "w" ||
      character === "x" ||
      character === "y" ||
      character === "z"
    ) {
      numConsonants++;
    } else {
      // If the character is not a letter, skip it and do not count it as a consonant or vowel
    }
  }
  // Print word and the number of consonants and vowels
  console.log(word + " has " + numConsonants + " consonants and " + numVowels + " vowels.");
}
