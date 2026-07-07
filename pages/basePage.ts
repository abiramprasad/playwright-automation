import {Page} from 'playwright';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async navigateTo(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
    }

        async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async takeScreenshot(name: string) {
        await this.page.screenshot({ 
        path: `screenshots/${name}.png`, fullPage: true });
    }
}