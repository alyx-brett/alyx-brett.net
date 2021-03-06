import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BlogPostListComponent } from '../blog/blog-post-list/blog-post-list.component';
import {BlogPostPageComponent} from '../blog/blog-post-page/blog-post-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { XmasComponent } from '../pages/xmas/xmas.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full'},
  { path: 'about', component: AboutPageComponent },
  { path: 'blog/:id', component: BlogPostPageComponent},
  { path: 'blog', component: BlogPostListComponent},
  { path: ':year/:month/:day/:title', component: BlogPostPageComponent},
  { path: ':xmas', component: XmasComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
