import { test, expect } from '@playwright/test';

test('task1', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Using ID locator for username
    await page.locator('#username').fill('student');

    // Using ID locator for password
    await page.locator('#password').fill('Password123');

    // Using Role locator for button
    await page.getByRole('button', { name: 'Submit' }).click();

    // Using Text locator for verification
    await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();

   // await page.getByRole('heading', { name: 'Logged In Successfully' }).click();
}
);