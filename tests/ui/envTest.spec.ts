import { test, expect } from "@playwright/test";
import { getConfig, getEnvName } from "../../config/envHelper";
import { LoginPage } from "../../pages/loginPage";
import { DashboardPage } from "../../pages/dashboardPage";

const envName = getEnvName();
const config = getConfig();

test(`Login test of ${envName} environment`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    console.log(`\n🌍 Testing on: ${envName}`);
    console.log(`🔗 URL: ${config.baseURL}`);
    console.log(`👤 Username: ${config.username}`);

    await loginPage.navigateTo("/practice-test-login/");
    await loginPage.login(config.username, config.password);
    await expect(dashboardPage.successMessage).toBeVisible();

    console.log(`✅ Login test PASSED on ${envName}!`);
})