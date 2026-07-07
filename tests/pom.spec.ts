import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { DashboardPage } from "../pages/dashboardPage";

// Test 1: Valid login
test("Valid test login", async ({ page }) => {
  //creating page objects
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  //using page objects and no locators
  await loginPage.navigateTo();
  await loginPage.login("student", "Password123");

  //verifying using dashboard page object
  await expect(dashboardPage.successMessage).toBeVisible();
  await expect(dashboardPage.logoutLink).toBeVisible();

  console.log("✅ Valid login test passed!");
});

// Test 2: Invalid login
test("Invalid test login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateTo();
  await loginPage.login("abiram", "Password123");

  //verifying error message
  await expect(loginPage.errorMessage).toBeVisible();
  console.log("✅ Invalid login test passed!");
});
