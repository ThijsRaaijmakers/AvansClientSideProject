import { User } from "./user/user";

export class Community {
    id: number = 0;
    name: string = '';
    description: string = '';
    members: Array<User> = [];

    constructor(name = '', description = '', members = []) {
        this.name = name;
        this.description = description;
        this.members = members;
    }
}