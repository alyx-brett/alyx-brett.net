import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BlogPostViewModel, BlogService} from '../../services/blog/blog.service';

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.css']
})
export class BlogPostPageComponent implements OnInit {
  post: BlogPostViewModel;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService) {
    }


  ngOnInit() {
    this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        var id = '';
        if (paramMap.has('id')) 
        {
          id = paramMap.get('id');         
        }
        else {
          id = [paramMap.get('year'), paramMap.get('month'), paramMap.get('day'), paramMap.get('title')]
          .join('-')
          .replace('.html', '');
        }

      this.blogService.getPost(id).subscribe((post: BlogPostViewModel) => {
        this.post = post;
      });

      });
    }

}
