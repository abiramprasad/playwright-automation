import {test, expect} from './fixtures'

// test 1 - already logged in
test('Verify Dashboard', async ({loggedInPage}) =>{
    await expect(loggedInPage.getByText('Logged In Successfully')).toBeVisible();
    console.log('Dashboard verified');
});

// test 2 - also already logged in
test('Verify Logout Link', async ({loggedInPage}) => {
    await expect(loggedInPage.getByRole('link', { name: 'Log out' })).toBeVisible();
    console.log('✅ Logout link verified!');
})