import { test, expect } from '../fixtures/pageFixtures';

test('Valid login redirects to inventory', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.verifyOnInventoryPage();
});
