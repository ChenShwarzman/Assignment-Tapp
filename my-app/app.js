// Demo App - Uses my-sdk to perform various operations

// BUG #1: Wrong import path (should be "my-sdk", not "./my-sdk")
const sdk = require("my-sdk");

// Step 1: Initialize the SDK
console.log("=== Step 1: Initializing SDK ===");
const result = sdk.initialize({ apiKey: "demo-key-123" });
console.log("Init result:", result);

// Step 2: Greet the user
// BUG #2: Calling "greet" but the function is actually called "sayHello"
console.log("\n=== Step 2: Greeting ===");
const greeting = sdk.sayHello("Alice");
console.log(greeting);

// Step 3: Do some math
console.log("\n=== Step 3: Math Operations ===");
const sum = sdk.add(10, 5);
console.log("10 + 5 =", sum);

const product = sdk.multiply(4, 3);
console.log("4 * 3 =", product);

// Step 4: String operations
console.log("\n=== Step 4: String Operations ===");
const upper = sdk.toUpperCase("hello world");
console.log("Uppercase:", upper);

const reversed = sdk.reverseString("hello");
console.log("Reversed:", reversed);

// Step 5: Truncate a long string
console.log("\n=== Step 5: Truncate ===");
const longText = "This is a really long sentence that should be cut short";
const short = sdk.truncate(longText, 20);
console.log("Truncated:", short);

// Step 6: Get a timestamp
console.log("\n=== Step 6: Timestamp ===");
const timestamp = sdk.getTimestamp();
console.log("Current timestamp:", timestamp);

// Step 7: Validate emails
console.log("\n=== Step 7: Email Validation ===");
console.log("test@example.com is valid:", sdk.isValidEmail("test@example.com"));
console.log("not-an-email is valid:", sdk.isValidEmail("not-an-email"));

// Step 8: Calculate average
console.log("\n=== Step 8: Average ===");
const avg = sdk.calculateAverage([10, 20, 30, 40, 50]);
console.log("Average of [10,20,30,40,50]:", avg);

// Step 9: Get unique values
console.log("\n=== Step 9: Unique Values ===");
const unique = sdk.uniqueValues([1, 2, 2, 3, 3, 3, 4]);
console.log("Unique values:", unique);

// Step 10: Format a date
// BUG #3: Calling a function that doesn't exist in the SDK
console.log("\n=== Step 10: Format Date ===");
const formattedDate = (new Date()).toLocaleDateString();
console.log("Formatted date:", formattedDate);

console.log("\n=== All operations completed! ===");
