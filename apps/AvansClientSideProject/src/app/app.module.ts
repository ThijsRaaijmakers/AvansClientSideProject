import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { AboutComponent } from './about/about.component';
import { FeedComponent } from './feed/feed.component';
import { CommunityComponent } from './community/community.component';
import { PostDetailComponent } from './feed/post-detail/post-detail.component';
import { EditPostComponent } from './feed/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserComponent,
    UserDetailComponent,
    AboutComponent,
    FeedComponent,
    CommunityComponent,
    PostDetailComponent,
    EditPostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
