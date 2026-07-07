import {test, expect} from '@playwright/test';

test('Waits Demo', async ({page}) => {

    // Navigate to login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.waitForSelector('#username');
    console.log('✅ username textbox exists');

    await page.locator('#username').fill('student');
    // await page.locator('#password').fill('Password123');
    await page.getByRole('textbox', {name: 'password'}).fill('Password123');

    await page.getByRole('button', {name: 'Submit'}).click();

    await page.waitForURL(/logged-in-successfully/);
    console.log('✅ successful URL is displayed and page logged in');

    await page.waitForSelector('text = Log out');
    console.log('✅ Log out button loaded successfully');

  /*  // Navigate to login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // AUTO-WAIT in action:
    await page.locator('#username').fill('student');
    console.log('✅ Auto-wait: Username field ready and filled!');

    await page.locator('#password').fill('Password123');
    console.log('✅ Auto-wait: Password field ready and filled!');

    // Click submit — auto-wait ensures button is ready!
    await page.getByRole('button', { name: 'Submit' }).click({ timeout: 60000 });
    console.log('✅ Auto-wait: Submit button clicked!');
    
    // MANUAL WAIT — Wait for URL to change:
    await page.waitForURL(/logged-in-successfully/);
    console.log('✅ Manual wait: Dashboard URL loaded!');

    // MANUAL WAIT — Wait for element to appear:
    await page.waitForSelector('h1');
    console.log('✅ Manual wait: Page heading appeared!');

    await expect(page.getByText('Logged In Successfully')).toBeVisible();
    console.log('✅ All waits completed successfully!');

    await expect(page.getByRole('heading', {name: 'Logged in Successfully'})).toBeVisible(); */
}
)