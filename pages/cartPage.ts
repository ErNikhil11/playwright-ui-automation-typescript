import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyCartHasItems() {
    const itemCount = await this.page.locator('.cart_item').count();
    expect(itemCount).toBeGreaterThan(0);
  }

  async proceedToCheckout() {
    await this.page.click('#checkout');
  }
}
