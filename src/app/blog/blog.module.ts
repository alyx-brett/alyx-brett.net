import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {BlogPostListComponent} from './blog-post-list/blog-post-list.component';
import {MarkdownModule} from 'ngx-markdown';
import { BlogPostPageComponent } from './blog-post-page/blog-post-page.component';
import {RouterModule} from '@angular/router';
import { BlogPostTagsComponent } from './blog-post-tags/blog-post-tags.component';

@NgModule({
  declarations: [
    BlogPostComponent,
    BlogPostListComponent,
    BlogPostPageComponent,
    BlogPostTagsComponent
  ],
    imports: [
        CommonModule,
        MarkdownModule.forChild(),
        RouterModule
    ]
})
export class BlogModule { }
