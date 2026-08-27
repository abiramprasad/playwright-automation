import  {Page, Locator} from '@playwright/test';

export class LoginPage {
    // All locators in one place
    private usernameField: Locator;
    private passwordField: Locator;
    private submitButton: Locator;
    readonly errorMessage: Locator;

    constructor(private page: Page) {
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.submitButton = page.getByRole('button', {name: 'submit'});
        this.errorMessage = page.locator('#error');
    }

    // Navigate to login page
    async navigateTo() {
        await this.page.goto('/practice-test-login/');
    }

    //Login actions reusable
    async loginAs(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }
}

/* import {Page, Locator} from '@playwright/test'

export class LoginPage  {
    
    // page object
  readonly page: Page;

    // All locators for login page
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    // constructor creation
    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.submitButton = page.getByRole('button', {name: 'submit'});
        this.errorMessage = page.locator('#error');
    }

    // actions
    async navigateTo() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
        // await this.page.goto('/practice-test-login/');
    }

    //complete LOGIN in one step

    async enterUsername(username: string) {
        await this.usernameField.fill(username);
    }
    async enterPassword(password: string) {
        await this.passwordField.fill(password);
    }
    async clickSubmit() {
        await this.submitButton.click();
    }
    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickSubmit();
    }
} 

    // Test for Phase 5 of framework design, using inheritance and basePage.ts
    
import {Page, Locator} from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly submitButton:  Locator;
    readonly errorMessage:  Locator;

    constructor(page: Page) {
        super(page);
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.submitButton = page.getByRole('button', {name: 'submit'});
        this.errorMessage = page.locator('#error');
    }
    async login (username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }
}
*/