import {Component, Input, ViewChild, OnInit, AfterViewChecked, OnChanges, ElementRef} from '@angular/core';
import {BlogPostViewModel} from '../../services/blog/blog.service';
import { MathjaxService } from '../../services/mathjax.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {

  @Input()
  post: BlogPostViewModel;

  MathJax: MathjaxService;

  constructor(mathJax : MathjaxService){
    this.MathJax = mathJax;
  }

  public onMarkdownLoad(){
    this.MathJax.typeset();
  }
}

