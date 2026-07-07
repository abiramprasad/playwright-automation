import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { DashboardPage } from '../../pages/dashboardPage';
import  loginData  from '../../test-data/loginData.json';

test ('Valid Login - Framework Test', async ({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Using base method - inherited
    await loginPage.navigateTo('/practice-test-login/');

        // Using LoginPage method
        await loginPage.login(loginData.validUser.username, loginData.validUser.password);

        await expect(dashboardPage.successMessage).toBeVisible();
        console.log(`✅ Framework test passed!`);
        console.log(`page title: ${await dashboardPage.page.title()}`);

})