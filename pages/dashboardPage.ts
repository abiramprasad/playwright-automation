import {Page, Locator} from '@playwright/test'

export class DashboardPage {
    readonly page: Page;
    readonly successMessage: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successMessage = page.getByText('Logged In Successfully');
        this.logoutLink = page.getByRole('link', {name: 'Log out'});
        }
        //Actions
        async clickLogout() {
            await this.logoutLink.click();
        }
        async isLoginSuccessful(): Promise<boolean> {
        return await this.successMessage.isVisible();
        }
}