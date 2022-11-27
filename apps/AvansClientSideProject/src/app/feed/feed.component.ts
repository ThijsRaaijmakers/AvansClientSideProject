import { Component, OnInit } from '@angular/core';
import { Post } from '../entity/post';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  posts: Post[] = []
  selectedPost?: Post;
  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(): void{
    this.postService.getPosts().subscribe(posts => this.posts = posts)
  }

  onDelete(post: Post):void {
    this.postService.deletePost(post);
    this.getPosts()
  }
}
