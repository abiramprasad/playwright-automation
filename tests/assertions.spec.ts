import { test, expect } from '@playwright/test';

test ('Assertions Demo', async ({page}) => {
    
    // Navigate to login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // ASSERTION 1: Check page title
    await expect (page).toHaveTitle(/Practice/);
    // await expect (page).toHaveTitle(/practice/);
    console.log('✅ Assertion 1: Page title verified!');

  /*  // ASSERTION 2: Check username field is visible
    await expect (page.locator('#username',)).toBeVisible();
    console.log('✅ Assertion 2: Username field is visible!');  */   

    // Fill credentials
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    
  /*  // ASSERTION 3: Check username value was entered
    await expect (page.locator('#username',)).toHaveValue('student');
    console.log('✅ Assertion 3: Username value verified!'); */

    // Click submit
    await page.getByRole('button', {name: 'Submit'}).click();
    
    // ASSERTION 4: Check URL changed
    await expect(page).toHaveURL(/logged-in-successfully/);
    console.log('✅ Assertion 4: URL verified!');

    // ASSERTION 5: Check success message visible
    await expect(page.getByText('Logged In Successfully')).toBeVisible();
    console.log('✅ Assertion 5: Success message visible!');

    // ASSERTION 6: Check logout link is visible
    await expect(page.getByRole('link', {name: 'Log out'})).toBeVisible();
    console.log('✅ Assertion 6: Logout link visible!');

  /*  // ASSERTION 7: Check error message is NOT visible
    await expect(page.locator('#error')).not.toBeVisible();
    console.log('✅ Assertion 7: Error message NOT visible!'); */
}
)