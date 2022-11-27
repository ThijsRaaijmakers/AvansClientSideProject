import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../../entity/post';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    POSTS: Post[] = [
      { id: 1, author: { id: 2, name: 'Test User', emailAddress: 'test@gmail.com', birthday: new Date("2002-10-4"), karma: 23 }, community: { id: 1, name: "testCommunity", description: "testDescription", members: [] }, title: 'Meme', content: 'Insert funny meme', isNSFW: false},
      { id: 2, author: { id: 2, name: 'Test User', emailAddress: 'test@gmail.com', birthday: new Date("2002-10-4"), karma: 23 }, community: { id: 1, name: "testCommunity", description: "testDescription", members: [] }, title: 'Help with PC', content: 'Testcontent', isNSFW: false},
      { id: 3, author: { id: 2, name: 'Test User', emailAddress: 'test@gmail.com', birthday: new Date("2002-10-4"), karma: 23 }, community: { id: 1, name: "testCommunity", description: "testDescription", members: [] }, title: 'NSFW post test', content: 'This is NSFW', isNSFW: true},
      { id: 4, author: { id: 2, name: 'Test User', emailAddress: 'test@gmail.com', birthday: new Date("2002-10-4"), karma: 23 }, community: { id: 1, name: "testCommunity", description: "testDescription", members: [] }, title: 'Random post', content: 'Testpost', isNSFW: false}
    ];

    constructor() { }
  getPosts(): Observable<Post[]> {
    const posts = of(this.POSTS);
    return posts;
  }

  addPost(post: Post) {
    post.id = this.POSTS.length + 1;
    this.POSTS.push(post);
  }

  updatePost(updatedPost: Post) {
    let updatedPosts = this.POSTS.filter(
      (post) => post.id !== updatedPost.id
    );
    updatedPosts.push(updatedPost);
    this.POSTS = updatedPosts;
  }

  deletePost(deletedPost: Post): void {
    let withoutPost = this.POSTS.filter(
      (post) => post.id !== deletedPost.id
    );
    console.log(withoutPost)
    this.POSTS = withoutPost;
  }

  getPostById(id: number): Post {
    return this.POSTS.filter((post) => post.id === id)[0];
  }
}