# Chapter 18: Async/Await

This chapter demonstrates **async/await** patterns in JavaScript and their integration with Playwright testing framework.

## Files Overview

### Async.js
Demonstrates error handling with async/await using try-catch-finally blocks.
- Shows how to handle promise rejections
- Illustrates the finally block for cleanup operations

### AsyncP2.js
Basic async/await example with Promise.resolve().
- Defines a function that returns a resolved promise
- Uses await to extract the promise value
- Demonstrates the flow from promise to async/await

### Async_EX.js
Combines basic async/await concepts with Playwright testing.
- Shows simple async function returning a value
- Includes a Playwright test example
- Demonstrates browser automation with page navigation and assertions

## Key Concepts

### Async Functions
- Functions declared with `async` keyword can use `await`
- Always return a Promise
- Enable cleaner, more readable code compared to `.then()` chains

### Await Operator
- Pauses execution until a promise settles
- Can only be used inside async functions
- Extracts the resolved value from a promise

### Error Handling
- Use `try-catch` blocks for error handling
- `finally` block runs regardless of success/failure
- Cleaner than promise `.catch()` chains

### Playwright Integration
- Async/await is essential for Playwright tests
- All page interactions are asynchronous
- Tests use `async` test callbacks with `await` for page operations

## Usage

Run any file with Node.js:
```bash
node filename.js
```

Run Playwright tests:
```bash
npx playwright test
```

## Learning Path

1. Start with **AsyncP2.js** - Basic async/await
2. Move to **Async.js** - Error handling
3. Finally **Async_EX.js** - Real-world Playwright usage
