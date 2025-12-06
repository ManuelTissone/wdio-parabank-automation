# Parabank Test Automation Framework

A complete test automation project for [Parabank](https://parabank.parasoft.com/parabank/index.htm), a banking demo application. Built with WebdriverIO, Mocha, Chai, and the Page Object Model pattern.

## About This Project

I created this project to master test automation and **implement my first CI/CD pipeline with GitHub Actions**. It demonstrates how professional automation frameworks work and how to integrate them with modern development practices.

**Current Status:** 2 tests passing | 1 test in progress | ✅ CI/CD Pipeline Active

## What I Learned

While building this project, I learned:

* How to structure a **professional test automation framework** from scratch
* Implementing **Page Object Model (POM)** with inheritance and reusable methods
* Using **GitHub Actions** to automate test execution on every push and pull request
* Understanding **CI/CD concepts** and how they improve code quality
* Handling **dynamic selectors** and dropdown interactions in WDIO
* Working with **Allure Reporter** for detailed test reports
* Organizing tests in a way that scales with the project

## Technologies Used

* **Test Framework:** WebdriverIO (WDIO)
* **Test Runner:** Mocha
* **Assertion Library:** Chai
* **Design Pattern:** Page Object Model (POM)
* **CI/CD Platform:** GitHub Actions
* **Reporting:** Allure Reporter
* **Language:** JavaScript
* **Browser:** Chrome

## Project Structure

```
wdio-parabank-automation/
├── test/
│   ├── pages/
│   │   ├── base.page.js         # Base page with reusable methods
│   │   ├── register.page.js     # Registration page objects and methods
│   │   ├── login.page.js        # Login page objects and methods
│   │   └── transfer.page.js     # Transfer page objects and methods
│   └── specs/
│       └── transfer.spec.js     # Complete test flow: register → login → transfer
├── .github/
│   └── workflows/
│       └── test.yml             # GitHub Actions CI/CD configuration
├── wdio.conf.js                 # WebdriverIO configuration
├── package.json                 # Project dependencies
└── .gitignore                   # Files to exclude from Git
```

## What the Tests Cover

### Test Case 1: User Registration

Registers a new user with the following steps:

1. Navigate to registration page
2. Fill in personal information (name, address, city, state, zip code, phone)
3. Fill in security information (SSN, username, password)
4. Submit registration form
5. Verify successful registration

### Test Case 2: User Login

Tests login functionality:

1. Fill in username and password
2. Click login button
3. Verify successful login with welcome message

### Test Case 3: Fund Transfer

Tests the complete transfer flow:

1. Navigate to Transfer Funds section
2. Enter amount
3. Click transfer button
4. Verify transfer completion

## How to Run This Project

### Requirements

* Node.js (v18 or higher)
* npm (comes with Node.js)
* Chrome browser

### Setup

1. Clone the repository:

```bash
git clone https://github.com/ManuelTissone/wdio-parabank-automation.git
cd wdio-parabank-automation
```

2. Install dependencies:

```bash
npm install
```

### Running Tests

Run all tests:

```bash
npm test
```

Run specific test file:

```bash
npx wdio run wdio.conf.js --spec test/specs/transfer.spec.js
```

### Viewing Test Reports

After running tests, Allure reports are generated in `allure-results/` folder.

To view reports locally (requires Java):

```bash
npx allure serve allure-results
```

## CI/CD Pipeline with GitHub Actions

This project includes a **GitHub Actions workflow** that automatically:

1. **Triggers** on every push to `main` branch
2. **Installs** project dependencies
3. **Runs** all tests automatically
4. **Generates** Allure reports
5. **Notifies** you if tests pass or fail

### How It Works

When you push code or create a pull request:

```
git push origin main
    ↓
GitHub detects changes
    ↓
Workflow runs automatically
    ↓
Tests execute in cloud VM
    ↓
Results available in Actions tab
```

**Benefits:**
* Catch bugs before merging code
* Ensure code quality automatically
* Test on every change
* No manual test execution needed

## Code Organization

### Base Page Pattern

All page classes inherit from `BasePage`, which provides reusable methods:

* `click(selector)` - Click an element
* `setValue(selector, value)` - Type text in input
* `getText(selector)` - Get element text
* `isDisplayed(selector)` - Check if element is visible
* `waitForElement(selector)` - Wait for element to appear
* `selectByVisibleText(selector, text)` - Select dropdown by visible text
* `selectByValue(selector, value)` - Select dropdown by value attribute

### Page Inheritance

```
BasePage (generic methods)
├── RegisterPage (registration-specific methods)
├── LoginPage (login-specific methods)
└── TransferPage (transfer-specific methods)
```

This approach follows the **DRY principle** (Don't Repeat Yourself) and makes maintenance easier.

## Key Features

### 1. Professional Page Object Model

Each page class encapsulates:
* Selectors (element identifiers)
* Methods (page interactions)
* Clear responsibility

### 2. Reusable Methods

Common actions like clicking, typing, and waiting are defined once in `BasePage` and used everywhere.

### 3. Automated CI/CD

Tests run automatically on every commit. No manual execution needed.

### 4. Detailed Reporting

Allure Reporter provides:
* Visual test results
* Failure screenshots
* Execution time statistics
* Test trend analysis

### 5. Browser Compatibility

Configured for Chrome. Easy to extend to Firefox, Edge, etc.

## Known Challenges

### Challenge 1: Dynamic Account Numbers

Parabank changes account numbers on each test run. Attempted solution: `getFirstAccountValue()` method. Future work needed for dynamic selector handling.

### Challenge 2: Dropdown Selection

Dropdown interaction requires specific WDIO methods. Current implementation: `selectByValue()`. Further testing needed for cross-browser compatibility.

### Challenge 3: Transfer Completion Verification

Transfer page validation selector needs refinement to capture success messages reliably.

## Future Improvements

I plan to enhance this project with:

* Add negative test scenarios (invalid inputs, error handling)
* Implement screenshot capture on test failures
* Add more detailed HTML reports
* Test multiple user roles
* Implement parallel test execution
* Add performance testing
* Extend to cross-browser testing (Firefox, Safari, Edge)
* Add API testing alongside UI tests

## Learning Outcomes

**What CI/CD Means to Me Now:**

Before: CI/CD was just a term in job postings
Now: I understand it's essential for quality code. Automated testing catches bugs early and prevents broken code from being merged.

**Key Insights:**

* Automation saves time and reduces human error
* Page Object Model makes tests maintainable at scale
* CI/CD pipelines are non-negotiable in professional development
* Small, focused test methods are better than large monolithic ones
* Proper organization saves debugging time later

## About Me

I'm a QA Automation student building real projects to master test automation and DevOps practices. This project represents my first successful implementation of a CI/CD pipeline, marking an important step in my career development.

## Contact

* **LinkedIn:** [manuel-tissone-585b10378](https://www.linkedin.com/in/manuel-tissone-585b10378)
* **Email:** m.mtissone@gmail.com
* **GitHub:** [@ManuelTissone](https://github.com/ManuelTissone)

---

This is an actively maintained learning project. I continuously improve it as I learn new practices and technologies.
