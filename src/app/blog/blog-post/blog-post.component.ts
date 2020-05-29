import {Component, Input} from '@angular/core';
import {BlogPostViewModel} from '../../services/blog/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {

  @Input()
  post: BlogPostViewModel;
}
