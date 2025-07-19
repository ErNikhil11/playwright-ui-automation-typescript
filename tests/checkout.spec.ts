import { test } from '../fixtures/pageFixtures';

test('Complete checkout process', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addItemToCart(0);
  await inventoryPage.navigateToCart();
  await cartPage.verifyCartHasItems();
  await cartPage.proceedToCheckout();
  await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
  await checkoutPage.finishCheckout();
  await checkoutPage.verifyOrderComplete();
});
