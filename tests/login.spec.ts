import { test, expect } from '@playwright/test';

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
});