// fixtures/index.ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { config }       from '../config/env.config';

// Define our custom fixtures
type AppFixtures = {
  loginPage:     LoginPage;
  dashboardPage: DashboardPage;
  loggedInPage:  { loginPage: LoginPage; dashboardPage: DashboardPage };
};

export const test = base.extend<AppFixtures>({

  // Fixture 1: Just the login page
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await use(loginPage);
  },

  // Fixture 2: Already logged in!
  loggedInPage: async ({ page }, use) => {
    const loginPage     = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // SETUP: login before test
    await loginPage.navigateTo();
    await loginPage.loginAs(config.username, config.password);

        // ✅ THIS IS THE FIX — wait for dashboard to load!
    await page.waitForURL(/logged-in-successfully/);
    await page.waitForLoadState('networkidle');


    await use({ loginPage, dashboardPage }); // ← test runs here

    // TEARDOWN: nothing needed — browser closes automatically
  },

  // Fixture 3: Dashboard page
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});

export { expect } from '@playwright/test';