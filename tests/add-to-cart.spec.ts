import { test } from '../fixtures/pageFixtures';

test('Add item to cart and validate', async ({ loginPage, inventoryPage, cartPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.verifyOnInventoryPage();
  await inventoryPage.addItemToCart(0);
  await inventoryPage.navigateToCart();
  await cartPage.verifyCartHasItems();
});
