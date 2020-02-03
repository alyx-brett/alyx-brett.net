import { Component, OnInit } from '@angular/core';
import {BlogPageViewModel, BlogPostViewModel, BlogService} from '../../services/blog/blog.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {

  blogPage: BlogPageViewModel;
  posts: BlogPostViewModel[];

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((paramMap: ParamMap) => {
        this.blogService.getPage(parseInt(paramMap.get('page'), 10) || 0).subscribe((page: BlogPageViewModel) => {
          this.blogPage = page;
          this.posts = page.posts;
          console.log(page);
        });
      });
  }

}
