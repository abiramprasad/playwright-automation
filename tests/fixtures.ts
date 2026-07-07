import {test as base, Page} from '@playwright/test';

type myFixtures = {
    loggedInPage: Page;
};
export const test = base.extend<myFixtures> ({
    loggedInPage: async ({page}, use) => {
        // SETUP — runs before each test:
        await page.goto('https://practicetestautomation.com/practice-test-login/');
        await page.locator('#username').fill('student');
        await page.locator('#password').fill('Password123');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.waitForURL(/logged-in-successfully/);
        console.log('✅ Fixture: Logged in successfully!');

        await use(page);
        //teardown
        await page.close();
        console.log('✅ Fixture: Page closed!');
    }
})
export { expect } from '@playwright/test';