import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostTagsComponent } from './blog-post-tags.component';

describe('BlogPostTagsComponent', () => {
  let component: BlogPostTagsComponent;
  let fixture: ComponentFixture<BlogPostTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
