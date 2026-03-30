# SDK Assignment

Welcome! In this assignment, you will work with a small SDK (a code library) and a demo app that uses it. Your job is to find problems, fix them, and verify that the documentation matches reality.

No prior coding experience is required — just follow the steps carefully, be curious, and pay attention to details.

---

## What's in this project?

```
assignment/
├── my-sdk/          ← The SDK (a small library of useful functions)
│   ├── package.json
│   └── index.js
├── my-app/          ← A demo app that uses the SDK
│   ├── package.json
│   └── app.js
├── docs/
│   └── api-reference.md  ← Documentation listing all SDK functions
└── README.md        ← This file (your instructions)
```

---

## Before you start

You need **Node.js** installed on your computer.

To check if you have it, open a terminal and type:

```
node --version
```

If you see a version number (like `v18.17.0`), you're good to go.
If not, download it from https://nodejs.org (choose the LTS version).

---

## Important rules

1. **You must actually run the code.** Every stage requires you to paste the real terminal output as proof. Screenshots or copy-pasted terminal output — we will check.
2. **Show your process, not just answers.** We care about *how* you found things, not just *what* you found. Write down your reasoning.
3. **Work on your own.** You may use Google to understand error messages or learn JavaScript basics, but the analysis and reports must be your own thinking and your own words.
4. **You will present your findings live.** Be ready to explain what you found, walk through your steps, and answer follow-up questions in a short session with us.

---

## Stage 1 — Install and Run

**Goal:** Get the app running and see what happens.

### Steps:

1. Open a terminal and navigate to the `my-app` folder:
   ```
   cd my-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the app:
   ```
   npm start
   ```

4. You will see **errors**. That is expected.

### Your deliverable:

Create a file called `stage1-report.md` that includes:

- The **exact terminal output** you see (copy-paste it).
- For each error: explain **in your own words** what you think the error means.
- What do you think is causing the problem? (even if you're not sure — write your best guess)

---

## Stage 2 — Fix the Bugs

**Goal:** Make the app run completely without errors.

### Steps:

1. Read the error messages carefully. They tell you:
   - Which file has the problem
   - Which line has the problem
   - What went wrong

2. Open the files and fix the issues. There are **3 bugs** to find and fix.

3. After each fix, run the app again (`npm start`) and see if you get further.

4. Keep going until the app runs completely and prints `"All operations completed!"`.

### Your deliverable:

Create a file called `stage2-report.md` that includes:

- For **each bug** you found:
  1. The **error message** you saw (copy-paste from terminal)
  2. **Which file and line** you changed
  3. **What you changed** (show the before and after)
  4. **Why** this fix works — explain your reasoning
- The **full terminal output** of the app running successfully after all fixes.

---

## Stage 3 — Compare Documentation vs. Reality

**Goal:** Check if the documentation accurately describes the actual SDK.

This is the most important stage. You need to be thorough and precise.

### Steps:

1. Open `docs/api-reference.md` — this lists all the functions the SDK is supposed to have.

2. Open `my-sdk/index.js` — this is the actual SDK code.

3. For **each function** listed in the documentation, check:
   - Does this function exist in the SDK code?
   - Is the name exactly the same?
   - Does it take the same parameters the docs describe?
   - **Actually call the function** with the example from the docs and check: does it return what the documentation says it returns?

4. Also check: are there functions in the SDK code that are **NOT** in the documentation?

### Your deliverable:

Create a file called `stage3-report.md` that includes:

**Part A — Function-by-function check:**

For EACH function in the documentation, fill in this table:

| # | Function (from docs) | Exists in code? | Name matches? | Parameters match? | Return value matches docs? | Notes |
|---|---|---|---|---|---|---|
| 1 | `initialize(config)` | ? | ? | ? | ? | ? |
| 2 | ... | ... | ... | ... | ... | ... |

**Part B — Missing from docs:**

List any functions that exist in the SDK code but are NOT mentioned in the documentation.

**Part C — Proof of testing:**

For each function where you found a mismatch, show:
- The **exact command** you ran to test it (e.g., `node -e "const sdk = require('./my-sdk'); console.log(sdk.getTimestamp())"`)
- The **actual output** you got
- What the **docs say** it should return
- **Why** this is a mismatch

**Important:** Do not just compare text. You must actually run the functions and observe the real output. Some mismatches can only be found by running the code.

---

## Stage 4 — Write an Automated Check

**Goal:** Write a script that automatically verifies documented functions against the SDK.

### Steps:

1. Create a new file called `validate.js` in the project root folder.

2. Your script must:
   - Load the SDK
   - Check that each documented function exists
   - Call each function with a test input and verify the output
   - Print a clear PASS/FAIL for each check

3. Run your script:
   ```
   node validate.js
   ```

### Your deliverable:

- The `validate.js` file itself.
- A file called `stage4-report.md` that includes:
  - The **full terminal output** of running your script.
  - A short explanation of **how your script works** — walk through your code and explain each part.
  - What was the **hardest part** of writing this script? What did you learn?

---

## Stage 5 — Summary Report

**Goal:** Write a clear, professional summary of everything you found.

### Your deliverable:

Create a file called `final-report.md` that answers these questions:

1. **How many total issues did you find?** List them all — bugs, mismatches, missing items.
2. **Which issues are critical** (would break a real app) **vs. minor** (cosmetic or edge case)? Explain why you classified each one the way you did.
3. **If you were the team lead**, which 3 issues would you fix first? Why?
4. **What did this assignment teach you** about the relationship between documentation and code?

Keep it under 1 page. Write it as if you're presenting to someone who has 5 minutes.

---

## How you'll be evaluated

| Stage | What we're looking for |
|---|---|
| Stage 1 | Can you follow instructions and describe what you observe? |
| Stage 2 | Can you read error messages, debug, and explain your reasoning? |
| Stage 3 | Are you thorough? Did you actually run the code, or only read it? |
| Stage 4 | Can you think programmatically and automate a manual process? |
| Stage 5 | Can you prioritize and communicate clearly? |

### We will also evaluate:

- **Originality of writing** — reports should be in your own words and reflect your own thinking.
- **Proof of hands-on work** — terminal outputs, real results, not theoretical analysis.
- **Live walkthrough** — you will present your findings and answer questions about your process.

**Tip:** It's better to do stages 1–3 thoroughly than to rush through all 5. Quality over quantity.

---

Good luck!
