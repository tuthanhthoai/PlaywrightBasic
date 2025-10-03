import { test, expect } from "./BaseTest";

test.describe("@Demo", async () => {
    test('TC01_Verify users can buy an item successfully', async ({ loginPage, homePage }) => {
        await test.step('User logs in ', async () => {
            await loginPage.login("vn7sq9+etjkuu2ubpjs4@sharklasers.com", "test123123");
        });

        await test.step('Navigate to Electronic Components & Supplies', async () => {
            await homePage.chooseDepartment('Electronic Components & Supplies');
        });

        // await test.step('Search employee', async () => {
        //     await pimPage.searchForEmployee(employee);
        // });

        // await test.step('Check data after searching', async () => {
        //     const countResult = await pimPage.isDisplayCountResult(1);
        //     expect(countResult).toBeTruthy();
        //     const isMatch = await pimPage.checkDisplayRowResult(1, employee);
        //     expect(isMatch).toBeTruthy();
        // });
    });
});
