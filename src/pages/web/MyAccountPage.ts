import { GeneralPage } from "./GeneralPage";

export class MyAccountPage extends GeneralPage {
    private usernameInput = this.page.getByRole('textbox', { name: 'Username or email address' });
    private passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    private loginButton = this.page.getByRole('button', { name: 'Log in' });

    public async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}