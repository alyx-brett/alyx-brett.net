import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogPostPageComponent } from './blog-post-page.component';

describe('BlogPostPageComponent', () => {
  let component: BlogPostPageComponent;
  let fixture: ComponentFixture<BlogPostPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
