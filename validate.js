// ref - https://stackoverflow.com/questions/47692421/is-there-a-javascript-equivalent-to-pytests-parameterized-fixtures
const sdk = require("./my-sdk");

const testCases = [
    { name: "initialize", args: [{ apiKey: "test-key" }], expectedStatus: "initialized", expectedKey: "test-key"},
    { name: "greet", args: ["Alice"], expected: "Hello, Alice!"},
    { name: "add", args: [2, 3], expected: 5},
    { name: "subtract", args: [10, 4], expected: 6},
    { name: "multiply", args: [3, 4], expected: 12},
    { name: "toUpperCase", args: ["hello"], expected: "HELLO"},
    { name: "reverseString", args: ["hello"], expected: "olleh"},
    { name: "getTimestamp", args: [], expected: "2024-01-15 10:30:00"},
    { name: "isValidEmail", args: ["user@example.com"], expected: true},
    { name: "isValidEmail", args: ["not-valid"], expected: false},
    { name: "calculateAverage", args: [[10, 20, 30]], expected: 20, comment: "first test"},
    { name: "calculateAverage", args: [[1, 2]], expected: 1.5, comment: "second test"},
    { name: "formatDate", args: [new Date("2024-01-15")], expected: "January 15, 2024"},
    { name: "truncate", args: ["Hello, world!", 5], expected: "Hello..."}
  ];

console.log("\n--- Starting SDK Doc Validation ---\n");

testCases.forEach(test => {
    const testFunction = sdk[test.name];
  
    if (typeof testFunction !== "function") {
        console.log("FAIL: " + test.name + " - Function is missing");
        return; 
      }
  
      const result = testFunction(...test.args);
  
      if (test.name === "initialize") {
        if (result && result.status === test.expectedStatus && result.apiKey === test.expectedKey) {
            console.log("PASS: initialize");
        } else {
            console.log("FAIL: initialize (Object structure mismatch)");
        }
  
    }else if (result === test.expected) {
        if (test.comment) {
            console.log("PASS: " + test.name + " - " + test.comment);
        } else {
        console.log("PASS: " + test.name);
      }
    } else {
        if (test.comment) {
            console.log("FAIL: " + test.name + " - " + test.comment + " (Expected: " + test.expected + ", Got: " + result + ")");
        } else {
            console.log("FAIL: " + test.name + " (Expected: " + test.expected + ", Got: " + result + ")");
        }
      }
  });

  console.log("\n--- Finished SDK Doc Validation ---\n");
