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
Create a .env file (already included) if not present:

```
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

## ✅ Test Scenarios

### 🔐 `login.spec.ts`

- ✅ **Valid login**  
  Ensure users with correct credentials can successfully log in and navigate to the dashboard.

- ❌ **Invalid login (wrong user/pass)**  
  Validate that incorrect credentials display an error and restrict access.

- 🚫 **Locked-out user validation**  
  Verify locked-out users receive the appropriate error message and are prevented from logging in.

---

### 🛒 `add-to-cart.spec.ts`

- ➕ **Add single/multiple products to cart**  
  Test the ability to add one or multiple items to the shopping cart from the inventory page.

- 🔢 **Verify cart item count and names**  
  Ensure the number of products and their names match the user selection when added to the cart.

---

### 💳 `checkout.spec.ts`

- 🧾 **Complete checkout flow**  
  Validate the full purchase process—from cart to order confirmation—with valid user details.

- 🛑 **Field validation in checkout steps**  
  Confirm proper error handling for missing or invalid user information in checkout steps.

- ✅ **Final order confirmation**  
  Ensure users receive a confirmation message/page after successful order placement.

  ## 📌 Highlights

- 🧱 **Page Object Model** for modular, reusable code  
  Logical separation of page interactions to maintain clean and maintainable test code.

- 🌐 **Configurable base URL via `.env`**  
  Easily switch environments without changing code.

- 📷 **Screenshots, videos & traces on test failure**  
  Auto-capture evidence for debugging failed tests.

- 🧪 **Playwright's powerful test runner with parallel execution**  
  High-performance execution with built-in retries, parallelism, and rich reports.

