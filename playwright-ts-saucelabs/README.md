# 💻 Playwright & TypeScript Automation Framework - Sauce Labs 
 This repository contains the end-to-end (E2E) automation testing project designed for the Sauce Labs application, developed with **Playwright & Typescript**. The framework follows the Page Object Model (POM) design pattern and includes reusable test utilities, fixtures, and reporting.
 
 The test scripts are derived from the "Epic-US-TC - Sauce Labs project" test cases, where the test cases that are candidates for automation are specified. These test cases were selected taking into account its impact -test core functionalities-, repeatibility and stability.

## 🧰 Tech Stack
 - Language: TypeScript
 - Page Object Model (POM) 
 - Testing Tool: Playwright
 - Environment: Node.js

## 📁Project structure
The project is structured to separate business logic and page interactions for high maintainability.

```text
 project-root
│
├── pages
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   └── ...
│
├── tests
│   ├── accesManagement.spec.ts
│   ├── 
│   ├── 
│   └── 
│
├── playwright.config.ts
└── package.json 

```
## ⚙️ Prerequisites
- Ensure Node.js is installed on your local machine.
- Use Visual Studio Code for the best development experience.


## 🔧 Installation
 - Clone the repository.
 - Install dependencies:
     npm install 
 - Initialize the Playwright configuration:
    npx playwright install
 - (Optional) Generate the TypeScript configuration if not present:
    npx tsc --init

## 🏃 Run Tests

Run all tests:

npx playwright test

Run specific test:

npx playwright test tests/login.spec.ts

Run headed:

npx playwright test --headed

Generate and open reports:

npx playwright show-report