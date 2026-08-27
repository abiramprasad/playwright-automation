import { test, expect } from '../fixtures/index';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

// TEST SUITE 1: Data-Driven Login Tests

for (const data of loginData) {
    test(`login: ${data.scenario} @smoke`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
        await loginPage.loginAs(data.username, data.password);

        if (data.expected === 'pass') {
            await expect(page).toHaveURL(/logged-in-successfully/);
            await expect (
                page.getByRole('heading', { name: 'Logged In Successfully' })
            ).toBeVisible();
            
        } else {
            await expect(page.locator('#error')).toBeVisible();
             await expect(page.locator('#error')).toHaveText(data.errorText!);
        }
    });
}

// TEST SUITE 2: Using Fixtures (Logged-in tests)

test.describe('Dashboard Tests @regression', () => {

  test('Dashboard shows success heading', async ({ loggedInPage }) => {
    const { dashboardPage } = loggedInPage;
    await expect(dashboardPage.pageHeading).toBeVisible();
  });

  test('Logout returns to login page', async ({ loggedInPage }) => {
    const { dashboardPage } = loggedInPage;
    await dashboardPage.logout();
    await expect(
      loggedInPage.loginPage['page']
    ).toHaveURL(/practice-test-login/);
  });

  test('Soft assertions — verify dashboard elements', async ({ loggedInPage }) => {
    const { dashboardPage } = loggedInPage;

    // Soft assertions — collect ALL failures at once
    await expect.soft(dashboardPage.pageHeading).toBeVisible();
    await expect.soft(dashboardPage.logoutButton).toBeVisible();
    await expect.soft(dashboardPage.successMessage).toBeVisible();
  });

});

/* import { test, expect } from '@playwright/test';

// Test 1: Valid Login
test('Login Test - Valid Credentials', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    console.log('✅ Navigated to login page');

    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');
    await page.click('#submit');

    await expect(page).toHaveURL(/logged-in-successfully/);
    console.log('✅ Login successful!');
});

// Test 2: Invalid Login
test('Login Test - Invalid Credentials', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    console.log('✅ Navigated to login page');

    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpassword');
    await page.click('#submit');


    // Verify error message appears
    await expect(page.locator('#error')).toBeVisible();
    console.log('✅ Error message displayed correctly!');
}); */