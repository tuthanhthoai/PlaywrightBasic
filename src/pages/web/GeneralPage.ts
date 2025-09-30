import { Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";

export class GeneralPage extends AbstractPage {
    private logInAndSignUpLink = this.page.getByRole('link', { name: /Log in/ });
    private closePopupButton = this.page.getByRole('button', { name: 'Close' });

    constructor(page: Page) {
        super(page);
    }

    async goToMyAccountPage() {
        await this.logInAndSignUpLink.click();
    }

    public async changePage(pageName: string) {
        await this.page.locator('.header-bottom-wrapper').getByRole('link', { name: pageName }).click();
    }

    public async chooseDepartment(departmentName: string) {
        await this.page.getByText('All departments').click();
        await this.page.getByRole('link', { name: departmentName }).click();
    }

    public async closePopup() {
        try {
            await this.closePopupButton.waitFor({ state: 'visible', timeout: 30000 });
            if (await this.closePopupButton.isVisible()) {
                await this.closePopupButton.click();
            }
        } catch {
            console.log('Popup did not appear within 30s');
        }
    }
}