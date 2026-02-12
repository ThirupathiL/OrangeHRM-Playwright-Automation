import { Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickAllTabs() {
    const tabs = await this.page.locator('.oxd-main-menu-item-wrapper');
    const count = await tabs.count();
   
    for (let i = 0; i < count; i++) {
      await tabs.nth(i).click();
      await this.page.waitForLoadState('networkidle');
      console.log(count)
    }
  }
}