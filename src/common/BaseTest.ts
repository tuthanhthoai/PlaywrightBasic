import { test as base } from '@playwright/test';
import { PageManagerHelper } from '../helpers/PageManagerHelper';
import { logger } from '../helpers/LoggerHelper';
import { HomePage } from '../pages/web/web-demo/HomePage';
import { Account } from '../data/objects/Account';
import { MailPage } from '../pages/web/web-mail/MailPage';
import { MyAccountPage } from '../pages/web/web-demo/MyAccountPage';
// import { HomePage } from "../pages/web/HomePage";
// import { MyAccountPage } from "../pages/web/MyAccountPage";

type MyFixtures = {
    // homePage: HomePage;
    // myAccountPage: MyAccountPage;
    pages: PageManagerHelper;
    account: Account;
};

export const test = base.extend<MyFixtures>({
    /*  Method 1: Intialize every page object needed */
    // homePage: async ({ page }, use) => {
    //     const homePage = new HomePage(page);
    // },
    // myAccountPage: async ({ page }, use) => {
    //     const myAccountPage = new MyAccountPage(page);
    // },

    /*  Method 2: Using PageManagerHelper to intialize page objects (which using Lazy initialization)*/
    pages: async ({ page }, use) => {
        const manager = new PageManagerHelper(page);
        await use(manager);
    },
    account: async ({ }, use) => {
        const account = new Account();
        await use(account);
    },
});

test.beforeEach(async ({ pages, account }) => {
    logger.clear();

    await pages.getPage(MailPage).navigateToWebMail();
    account.email = await pages.getPage(MailPage).getEmailAddress();

    await pages.getPage(HomePage).openAUT();
    await pages.getPage(HomePage).closePopup();
    await pages.getPage(HomePage).goToMyAccountPage();
    await pages.getPage(MyAccountPage).register(account.email);

    await pages.getPage(MailPage).navigateToWebMail();
    await pages.getPage(MailPage).clickConfirmEmail();
    const newPage = await pages.getPage(MailPage).clickSetNewPasswordLink();
    pages.replacePage(MyAccountPage, newPage);
    await pages.getPage(MyAccountPage).setNewPassword(account.password);
});


test.afterEach(async ({ page }, testInfo) => {
    await page.waitForTimeout(3000);
    const logs = logger.getLogs();
    if (logs.trim()) {
        await testInfo.attach('execution-log', {
            body: logs,
            contentType: 'text/plain',
        });
    }
});