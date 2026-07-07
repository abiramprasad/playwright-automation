import { test, expect } from '@playwright/test';

// These tests will run in parallel:
test('Test 1 - Login Page', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(page.locator('#username')).toBeVisible();
    const duration = Date.now() - startTime;
    console.log(`✅ Test 1 completed in ${duration}ms`);
});

test('Test 2 - Get User API', async ({ request }) => {
    const startTime = Date.now();
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);
    const duration = Date.now() - startTime;
    console.log(`✅ Test 2 completed in ${duration}ms`);
});

test('Test 3 - Create User API', async ({ request }) => {
    const startTime = Date.now();
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
        data: { name: 'Abiram', job: 'Tester' }
    });
    expect(response.status()).toBe(201);
    const duration = Date.now() - startTime;
    console.log(`✅ Test 3 completed in ${duration}ms`);
});

test('Test 4 - Login Page Title', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle(/Practice Test Automation/);
    const duration = Date.now() - startTime;
    console.log(`✅ Test 4 completed in ${duration}ms`);
});