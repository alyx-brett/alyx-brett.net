import {Component, Input, OnInit} from '@angular/core';
import {BlogPostViewModel} from '../../services/blog/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Input()
  post: BlogPostViewModel;

  constructor() { }

  ngOnInit() {
  }
}
