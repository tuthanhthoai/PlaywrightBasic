import { GeneralPage } from './GeneralPage';

export class HomePage extends GeneralPage {
  private searchInput = this.page.locator('input[name="q"]');
  private searchButton = this.page.locator('button[type="submit"]');
  private header = this.page.locator('h1');

  public async search(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
  }

  public async getHeaderText(): Promise<string> {
    return (await this.header.textContent()) ?? '';
  }
}
