import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UsersComponent } from './users/users.component';
import { FeedComponent } from './feed/feed.component';
import { PostDetailComponent } from './feed/post-detail/post-detail.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'post/:id/details', component: PostDetailComponent},
  { path: 'about', component: AboutComponent },
  { path: 'users/:id/edit', component: EditUserComponent },
  { path: 'users/new', component: EditUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }