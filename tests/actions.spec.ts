import { test, expect } from '@playwright/test';

test ('Actions demo - Login Test', async ({page})=> {

    // ACTION 1: Navigate (goto is also an action!)
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    console.log('✅ Action 1: Navigated to page');

    // ACTION 2: Fill username
    await page.locator('#username').fill('student');
    console.log('✅ Action 2: Filled username');

    // ACTION 3: Fill password
    await page.locator('#password').fill('Password123');
    console.log('✅ Action 3: Filled password');

    // ACTION 4: Press Tab (move to next field)
    await page.locator('#password').press('Tab');
    console.log('✅ Action 4: Pressed Tab key');

     // ACTION 5: Click submit button
     await page.getByRole('button', {name: 'Submit'}).click();
     console.log('✅ Action 5: Clicked submit');

     //Verify success
     await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
     console.log('✅ All actions completed successfully!');

    //clicking on logout using getByRole('link')
    await page.getByRole('link', {name: 'Log out'}).click();
    console.log('✅ Logged out successfully!');

        //Verify login screen is displayed to check successful logout
     await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
     console.log('✅ Logout success and login screen is displayed');
}
)
