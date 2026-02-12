import { setWorldConstructor, World, IWorldOptions, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);

// Launch browser before each scenario
Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

// Close browser after each scenario
After(async function () {
  await this.browser.close();
});