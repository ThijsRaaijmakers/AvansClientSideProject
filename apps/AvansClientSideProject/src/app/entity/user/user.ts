export class User {
    id: number = 0;
    name: string = '';
    emailAddress: string = '';
    birthday: Date = new Date();
    karma: number = 0

    constructor(name = '', emailAddress = '', birthday = new Date()) {
        this.name = name;
        this.emailAddress = emailAddress;
        this.birthday = birthday;
    }
}