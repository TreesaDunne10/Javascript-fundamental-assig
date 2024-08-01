// Function to test regex pattern against a string
function regexMatch(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
}

// Test the function with various patterns and strings
const testCases = [
    { pattern: '^Hello', str: 'Hello, world!', expected: true },
    { pattern: 'world$', str: 'Hello, world!', expected: true },
    { pattern: '\\d+', str: '123abc', expected: true },
    { pattern: '\\d+', str: 'abc', expected: false },
    { pattern: '[a-z]{3}', str: 'abc', expected: true },
    { pattern: '[a-z]{3}', str: 'ab', expected: false },
    { pattern: 'a.b', str: 'aab', expected: true },
    { pattern: 'a.b', str: 'acb', expected: true },
    { pattern: 'a.b', str: 'ab', expected: false },
    { pattern: '^[A-Z]', str: 'Hello', expected: true },
    { pattern: '^[A-Z]', str: 'hello', expected: false },
];

// Run the test cases
testCases.forEach(({ pattern, str, expected }, index) => {
    const result = regexMatch(pattern, str);
    console.log(`Test Case ${index + 1}: Pattern "${pattern}" against "${str}" => ${result} (Expected: ${expected})`);
});
