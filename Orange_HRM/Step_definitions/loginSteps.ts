import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../tests/loginPage';
import { DashboardPage } from '../tests/dashboardPage';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;

Given('I am on the login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

When('I login with {string} and {string}', async function (username: string, password: string) {
  await loginPage.login(username, password);
  dashboardPage = new DashboardPage(this.page);
});

Then('I should be able to click all tabs on the dashboard', async function () {
  await dashboardPage.clickAllTabs();
  
});