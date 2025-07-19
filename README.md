# 🧪 Swag UI Automation - Playwright + TypeScript

This project demonstrates end-to-end UI automation using **Playwright** and **TypeScript** for the [Swag Labs](https://www.saucedemo.com) demo application. It follows the **Page Object Model (POM)** design pattern.

---

## 📁 Folder Structure

```
swag-ui-playwright/
├── .env # Environment variables
├── package.json     # Project dependencies and scripts
├── playwright.config.ts   # Playwright configuration
├── tsconfig.json  # TypeScript configuration
├── fixtures/
│ └── pageFixtures.ts  # Custom test fixtures
├── pages/
│ ├── cartPage.ts  #  Page Object for Cart
│ ├── checkoutPage.ts # Page Object for Checkout
│ ├── inventoryPage.ts # Page Object for Inventory
│ └── loginPage.ts  # Page Object for Login
├── tests/
│ ├── add-to-cart.spec.ts  # Tests for add-to-cart flow
│ ├── checkout.spec.ts  # Tests for checkout flow
│ └── login.spec.ts  # Tests for login scenarios

```

## 🔧 Installation & Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set environment variables

```
Create a .env file (already included) if not present:

BASE_URL=https://www.saucedemo.com

```

### 3. Run all test

```
npx playwright test
```

### 4. View test report

```bash
npx playwright show-report
```

---
