import { test } from '../../common/BaseTest';
import { HomePage } from '../../pages/web/HomePage';
import { MyAccountPage } from '../../pages/web/MyAccountPage';

test.describe("@Demo", async () => {
    test('TC01_Verify users can buy an item successfully', async ({ pages }) => {
        const homePage = pages.getPage(HomePage);
        const myAccountPage = pages.getPage(MyAccountPage);

        homePage.goToMyAccountPage();
        // homePage.clickLogIn();

        await test.step('User logs in ', async () => {
            await myAccountPage.login("vn7sq9+etjkuu2ubpjs4@sharklasers.com", "test123123");
        });

        await test.step('Navigate to Electronic Components & Supplies', async () => {
            await homePage.chooseDepartment('Electronic Components & Supplies');
        });
    });
});
