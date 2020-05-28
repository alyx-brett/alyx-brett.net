import { Component, OnInit } from '@angular/core';
import {BlogPageViewModel, BlogPostViewModel, BlogService} from '../../services/blog/blog.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';


@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {

  blogPage: BlogPageViewModel;
  posts: BlogPostViewModel[];
  private pageNumbers: number[];

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((paramMap: ParamMap) => {
        this.blogService.getPage(parseInt(paramMap.get('page'), 10) || 0, paramMap.get('tag') || null).subscribe((page: BlogPageViewModel) => {
          this.blogPage = page;
          this.posts = page.posts;
          this.pageNumbers = Array.from(Array(this.blogPage.numberOfPages).keys());
        });
      });
  }

}
