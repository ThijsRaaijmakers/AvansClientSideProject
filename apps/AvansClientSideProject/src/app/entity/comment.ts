import { User } from "./user/user";

export class Comment {
    id: number = 0;
    author: User = new User();
    content: string = '';
    postTime: Date = new Date();

    constructor(author = new User(), content = '', postTime = new Date()) {
        this.author = author;
        this.content = content;
        this.postTime = postTime;
    }
}