import { Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";

export class GeneralPage extends AbstractPage {
    private readonly logInAndSignUpLnk: Locator;

    constructor(page: Page){
        super(page);
        this.logInAndSignUpLnk = page.getByRole('link', { name: '/my-account/'})
    }

    async goToMyAccountPage(){
        await this.logInAndSignUpLnk.click();
    }
}