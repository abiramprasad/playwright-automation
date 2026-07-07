import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { DashboardPage } from "../../pages/dashboardPage";
import { environments } from "../../config/environments";

const ENV = process.env.ENV || "qa"; // Default to 'qa' if TEST_ENV is not set
const config = environments[ENV];

test("Login with Environment Config - UI Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Uses environment-specific URL:
  await loginPage.navigateTo("/practice-test-login/");

  // Uses environment-specific credentials!
  await loginPage.login(config.username, config.password);

  await expect(dashboardPage.successMessage).toBeVisible();

  console.log(`✅ Test passed on ${ENV} environment!`);
  console.log(`URL: ${config.baseURL}`);
});
