import { DataUtils } from '../../utils/DataUtils';

export class Account {
    private _email: string;
    private _password: string;

    constructor(email: string = '') {
        this._email = email;
        this._password = DataUtils.generateRandomPassword();
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get password(): string {
        return this._password;
    }
}
