import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';

//Test 1: login-page screenshot visual test
test('login page visual test', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('login-page.png'/*, {fullPage: true}*/);
    console.log('✅ Login page visual verified!');

// Test 2: Element screenshot of submit button
/*   test('submit button screenshot visual test', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
        await page.waitForLoadState('networkidle'); */

        await expect(loginPage.submitButton).toHaveScreenshot('submit-button.png');
        maxDiffPixels: 100;
        console.log('✅ Submit button visual verified!');
    });