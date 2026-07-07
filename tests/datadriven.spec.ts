import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import {DashboardPage} from '../pages/dashboardPage';

// defining my test data
const testData = [
    { scenario: 'Valid login',      username: 'student',   password: 'Password123', expectedResult: 'pass' },
    { scenario: 'Invalid username',   username: 'wrongUser', password: 'Password123', expectedResult: 'fail' },
    { scenario: 'Invalid password',   username: 'student',   password: 'wrongPass',   expectedResult: 'fail' },
   // { scenario: 'Empty username',   username: '',          password: 'Password123', expectedResult: 'fail' },
   // { scenario: 'Empty password',   username: 'student',   password: '',            expectedResult: 'fail' },
    { scenario: 'Both empty',       username: '',          password: '',            expectedResult: 'fail' },
]

for (const data of testData) {
    test(`Login test ${data.scenario}`, async ({page}) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.navigateTo();
        await loginPage.login(data.username, data.password);

        // Different verification based on expected result:
        if( data.expectedResult === 'pass') {
            await expect(dashboardPage.successMessage).toBeVisible();
            console.log(`test passed for ${data.scenario}`);
        }
        else {
            await expect(loginPage.errorMessage).toBeVisible();
            console.log(`Error message is shown correctly for ${data.scenario}`);
        }
    })
}