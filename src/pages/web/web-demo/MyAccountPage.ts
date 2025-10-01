import { GeneralPage } from "./GeneralPage";

export class MyAccountPage extends GeneralPage {
    private usernameInput = this.page.getByRole('textbox', { name: 'Username or email address' });
    private passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    private loginButton = this.page.getByRole('button', { name: 'Log in' });
    private registerEmailInput = this.page.getByRole('textbox', { name: 'Email address *', exact: true });
    private registerButton = this.page.getByRole('button', { name: 'Register' });
    private newPasswordInput = this.page.getByLabel('New password *').nth(0);
    private reEnterNewPasswordInput = this.page.getByLabel('Re-enter new password *');
    private saveNewPasswordButton = this.page.getByRole('button', { name: 'Save' });
    private logOutLink = this.page.getByRole('link', { name: 'Logout' });

    public async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    public async register(email: string) {
        await this.registerEmailInput.fill(email);
        await this.registerButton.click();
    }

    public async setNewPassword(newPassword: string) {
        await this.newPasswordInput.waitFor({ state: 'visible', timeout: 10000 });
        await this.newPasswordInput.fill(newPassword);
        await this.reEnterNewPasswordInput.fill(newPassword);
        await this.saveNewPasswordButton.click();
    }

    public async logOut() {
        await this.logOutLink.click();
    }
}