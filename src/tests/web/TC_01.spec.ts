import { test } from '../../common/BaseTest';
import { HomePage } from '../../pages/web/web-demo/HomePage';
import { MyAccountPage } from '../../pages/web/web-demo/MyAccountPage';

test.describe("@TC01", async () => {
    test('TC01_Verify users can buy an item successfully', async ({ pages, account  }) => {
        const homePage = pages.getPage(HomePage);
        const myAccountPage = pages.getPage(MyAccountPage);

        await test.step('User logs in ', async () => {
            await myAccountPage.login(account.email, account.password);
        });

        await test.step('Navigate to Electronic Components & Supplies', async () => {
            await homePage.chooseDepartment('Electronic Components & Supplies');
        });
    });
});
