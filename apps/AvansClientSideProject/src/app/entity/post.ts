import { Community } from "./community";
import { User } from "./user/user";

export class Post {
    id: number = 0;
    author: User = new User();
    community: Community = new Community();
    title: string = '';
    content: string = '';
    isNSFW: boolean = false;

    constructor(author = new User(), community = new Community(),title = '', content = '', isNSFW = false) {
        this.author = author;
        this.community = community;
        this.title = title;
        this.content = content;
        this.isNSFW = isNSFW;
    }
}