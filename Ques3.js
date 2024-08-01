// Function to find matches for a given character class pattern in a string
function findMatches(pattern, str) {
    const regex = new RegExp(pattern, 'g');
    return str.match(regex) || [];
}

// Test the function with various character class patterns
const testString = "Hello, World! 1234.";

const digits = findMatches('\\d', testString);
const uppercaseLetters = findMatches('[A-Z]', testString);
const lowercaseLetters = findMatches('[a-z]', testString);
const specialCharacters = findMatches('[^a-zA-Z0-9]', testString);

console.log("Digits: ", digits); // ["1", "2", "3", "4"]
console.log("Uppercase Letters: ", uppercaseLetters); // ["H", "W"]
console.log("Lowercase Letters: ", lowercaseLetters); // ["e", "l", "l", "o", "o", "r", "l", "d"]
console.log("Special Characters: ", specialCharacters); // [",", " ", "!", " ", "."]
