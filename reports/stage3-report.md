**Part A:**
// added the test part here too


| # | Function (from docs) | Exists in code? | Name matches? | Parameters match? | Return value matches docs? | Notes | 
|---|---|---|---|---|---|---|
| 1 | `initialize(config)` | Yes | Yes | Yes | Yes | - |
| 2 | `greet(name)` | No | No | No | No | `sayHello` matches the docs of greet |
| 3 | `add( a, b)` | Yes | Yes | Yes | Yes | - |
| 4 | `subtract(a, b)` | No | No | No | No | The function does not exist |
| 5 | `multiply( a, b)` | Yes | Yes | Yes | Yes | - |
| 6 | `toUpperCase(text)` | Yes | Yes | Yes | Yes | - |
| 7 | `reverseString(text)` | Yes | Yes | Yes | Yes | - |
| 8 | `getTimestamp()` | Yes | Yes | Yes | No | Returns unformatted timestamp: `1775040277059` |
| 9 | `isValidEmail(email)` | Yes | Yes | Yes | Yes | - |
| 10 | `calculateAverage(numbers)` | Yes | Yes | Yes | No | return round value |
| 11 | `formatDate(date)` | No | No | No | No | The function does not exist |
| 12 | `truncate(text, maxLength)` | Yes | Yes | Yes | Yes | - |

**Part B:**
1. sayHello
2. uniqueValues

**Part C:**
| # | Function with mismatch |Exact command | Actual output | Docs say | Why |
|---|---|---|---|---|---|
| 1 | `greet(name)` | `node -e "const sdk = require('my-sdk'); console.log(sdk.greet('Alice'))"`   | `TypeError: sdk.greet is not a function` | `"Hello, Alice!"`|The function does not exist (there is `sayHello` function instead)|
| 2 | `subtract(a, b)` | `node -e "const sdk = require('my-sdk'); console.log(sdk.subtract(10, 4))"`   | `TypeError: sdk.subtract is not a function` | `6`|The function does not exist|
| 3 | `getTimestamp()` | `node -e "const sdk = require('my-sdk'); console.log(sdk.getTimestamp())"`   | `1775040277059` | `2026-01-04 1:47:00"`|The function does not format the date as expected|
| 4 | `calculateAverage(numbers)` | `node -e "const sdk = require('my-sdk'); console.log(sdk.calculateAverage([1,2]))"`   | `1` | `1.5`|The function rounds the avg value so it is not match the expected value|
| 5 | `formatDate(date)` | `node -e "const sdk = require('my-sdk'); console.log(sdk.formatDate(new Date()))"`   | `TypeError: sdk.formatDate is not a function` | `"January 15, 2024"`|The function does not exist|