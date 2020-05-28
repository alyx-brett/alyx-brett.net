import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BlogPostListComponent } from '../blog/blog-post-list/blog-post-list.component';
import {BlogPostPageComponent} from '../blog/blog-post-page/blog-post-page.component';
import { AboutPageComponent } from '../pages/about/about-page.component';

function calculateRedirection(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return 'blog/' + route.url.join('-').replace('.html', '');
}

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full'},
  { path: 'blog/:id', component: BlogPostPageComponent},
  { path: 'blog', component: BlogPostListComponent},
  { path: 'about', component: AboutPageComponent},
  { path: ':year/:month/:day/:title', component: BlogPostPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
