import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async verifyOnInventoryPage() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
    await expect(this.page.locator('.inventory_item')).toHaveCountGreaterThan(0);
  }

  async addItemToCart(itemIndex = 0) {
    await this.page.locator('.btn_inventory').nth(itemIndex).click();
  }

  async navigateToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
