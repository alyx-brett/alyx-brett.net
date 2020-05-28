import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-post-tags',
  template: `
    <p *ngIf="tags !== null && tags.length > 0">Tags: <span
    *ngFor="let tag of tags; let isLast=last"> <a
      [routerLink]="'/blog'"
      [queryParams]="{tag: tag}"
      >{{tag}}</a><span *ngIf="!isLast">, </span></span></p>`,
  styles: ['a:{z-index: 1}']
})
export class BlogPostTagsComponent implements OnInit {

  @Input()
  tags: string[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {  }

}
