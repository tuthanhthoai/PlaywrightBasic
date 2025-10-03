import { Page } from '@playwright/test';

export abstract class AbstractPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openAUT() {
        await this.page.goto("/");
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }
}