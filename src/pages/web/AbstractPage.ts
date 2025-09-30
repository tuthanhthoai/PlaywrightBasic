import { Page } from '@playwright/test';

export abstract class AbstractPage {
    protected readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async openAUT(){
        await this.page.goto("/");
    }
}