import { AbstractPage } from './AbstractPage';

export class GeneralPage extends AbstractPage{
  private loginLink = '//div[@class="header-top-wrapper "]//a[contains(@href, "my-account")]';
  private menuLink = '//div[contains(@class,"header-bottom-wrapper")]//a[text()="%s"]';
  private allDepartmentsLink = '//span[.="All departments"]';
  private departmentLink = '//div[span[.="All departments"]]/following-sibling::div//a[text()="%s"]';

  public async changePage(pageName: string) {
    const menuXpath = this.menuLink.replace('%s', pageName);
    await this.page.locator(menuXpath).click();
  }

  public async chooseDepartment(departmentName: string) {
    await this.page.locator(this.allDepartmentsLink).hover();
    const departmentXpath = this.departmentLink.replace('%s', departmentName);
    await this.page.locator(departmentXpath).click();
  }

  public async clickLogIn() {
    await this.page.locator(this.loginLink).click();
  }

  public async closePopup() {
    await this.page.getByRole('button', { name: 'Close' }).click();
  }
}