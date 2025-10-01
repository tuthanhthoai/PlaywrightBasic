import { Locator, Page } from '@playwright/test';
import { logger } from '../../../helpers/LoggerHelper';
import { UIHelper } from '../../../helpers/UIHelper';

export class MailPage {
    protected page: Page;
    private readonly pageUrl = "https://www.guerrillamail.com/";
    private readonly emailAddress: Locator;
    private readonly confirmEmail: Locator;
    private readonly setNewPasswordLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailAddress = this.page.locator('#email-widget');
        this.confirmEmail = this.page.getByText('account has been created!', { exact: false });
        this.setNewPasswordLink = this.page.getByRole('link', { name: 'Click here to set your new password.' });
    }

    public async getEmailAddress(): Promise<string> {
        return await this.emailAddress.textContent() ?? "";
    }

    public async clickConfirmEmail(): Promise<void> {
        await UIHelper.safeClick(this.confirmEmail, 60000, "Confirm email did not appear within 60s");
    }

    public async clickSetNewPasswordLink(): Promise<Page> {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.setNewPasswordLink.click(),
        ]);

        await newPage.waitForLoadState('domcontentloaded');
        return newPage;
    }

    public async navigateToWebMail() {
        await this.page.goto(this.pageUrl);
    }

}