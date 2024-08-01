// Function to check for a match and extract groups
function extractGroups(pattern, str) {
    const regex = new RegExp(pattern);
    const match = str.match(regex);
    if (match) {
        return match.groups || {};
    }
    return null;
}

// Test the function with a date pattern
const testString = "Today's date is 2024-08-01.";
const datePattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const result = extractGroups(datePattern, testString);

if (result) {
    console.log("Year: ", result.year); // "2024"
    console.log("Month: ", result.month); // "08"
    console.log("Day: ", result.day); // "01"
} else {
    console.log("No match found.");
}
