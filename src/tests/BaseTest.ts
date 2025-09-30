import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/web/LoginPage';
import { HomePage } from '../pages/web/HomePage';

export { expect };

type TestFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

});

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.testarchitect.com/');
});