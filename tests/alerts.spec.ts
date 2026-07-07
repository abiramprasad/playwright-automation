import {test, expect} from '@playwright/test';

test('Handle New Tab', async({ page })=>{

    await page.goto('https://the-internet.herokuapp.com/windows');
    console.log('Navigated to new page');

    // Click link that opens new tab:
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.getByRole('link', {name: 'Click Here'}).click()
    ]);
    // Wait for new page to load:
    await newPage.waitForLoadState();
    console.log('✅ New tab opened!');

    // Verify new tab content:
    await expect(page.getByRole('heading', {name: 'New Window'})).toBeVisible();
    console.log('✅ New tab content verified!');

    // Close new tab:
    await newPage.close();
    console.log('✅ New tab closed!');

    // Verifying the original page
    await expect(page.getByRole('heading', {name: 'Opening a new window'})).toBeVisible();
    console.log('✅ Back on original page!');
}
)