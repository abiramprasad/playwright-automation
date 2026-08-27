import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly successMessage: Locator;
    readonly logoutButton: Locator;
    readonly pageHeading: Locator;

    constructor(private page: Page) {
        this.successMessage = page.getByText('Logged In Successfully');
        this.logoutButton = page.getByRole('link', { name: 'Log out' });
        this.pageHeading = page.getByText('Logged In Successfully');
    }

      // Logout action
    async logout() {
        await this.logoutButton.click();
    }
}
/*
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
} */