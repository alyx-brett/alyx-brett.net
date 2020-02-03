import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostListComponent } from '../blog/blog-post-list/blog-post-list.component';
import {BlogPostPageComponent} from '../blog/blog-post-page/blog-post-page.component';

const routes: Routes = [
  { path: 'blog/:id', component: BlogPostPageComponent},
  { path: 'blog', component: BlogPostListComponent}
  // { path: ':year/:month/:day/:title', redirectTo: 'blog/:year-:month-:day-:title', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
