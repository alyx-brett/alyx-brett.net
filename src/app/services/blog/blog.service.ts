import {Injectable, Optional} from '@angular/core';
import postsCatalogue from '../../../assets/posts/posts-catalogue.json';
import { HttpClient} from '@angular/common/http';
import {Observable, of, forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';


class BlogPostRecord {
  path: string;
  title: string;
  tags: string[];
}

export class BlogPostViewModel {

  constructor(url: string, title: string, date: Date, tags: string[], body: string) {
    this.url = url;
    this.title = title;
    this.date = date;
    this.tags = tags;
    this.body = body;
  }

  url: string;
  title: string;
  date: Date;
  tags: string[];
  body: string;
}

export class BlogPageViewModel {
  constructor(pageNumber: number, numberOfPages: number, posts: BlogPostViewModel[], pageTag: any) {
    this.pageNumber = pageNumber;
    this.numberOfPages = numberOfPages;
    this.posts = posts;
    this.tag = pageTag;
  }

  tag: string;
  pageNumber: number;
  numberOfPages: number;
  posts: BlogPostViewModel[];
}


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  readonly postsPerPage = 6;

  posts: BlogPostRecord[];
  tags: string[];
  numberOfPages: number;

  constructor(
    private http: HttpClient
  ) {
    this.posts = postsCatalogue.posts;
    this.tags = postsCatalogue.tags;
    this.numberOfPages = this.posts.length
      ? Math.ceil(this.posts.length / this.postsPerPage )
      : 0;
  }

  readonly fetchedPosts = new Map<string, BlogPostViewModel>();
  readonly titleRegexp = new RegExp('(\\d\\d\\d\\d)-(\\d\\d)-(\\d\\d)-(.*)');

  fetchPost(record: BlogPostRecord): Observable<BlogPostViewModel> {
    if (this.fetchedPosts.has(record.path)) {
      return of(this.fetchedPosts.get(record.path));
    }
    return this.http.get('/assets/posts/' + record.path + '.md', {responseType: 'text'}).pipe(map(
      (response: string) => {
        const matches = this.titleRegexp.exec(record.path);
        const year = parseInt(matches[1], 10);
        const month = parseInt(matches[2], 10) - 1;
        const day = parseInt(matches[3], 10);
        const result = new BlogPostViewModel(
          record.path,
          record.title,
          new Date(year, month, day),
          record.tags,
          response
        );
        this.fetchedPosts.set(record.path, result);
        return result;
      }
    ));
  }

  getPage(pageNumber: number, tag: string): Observable<BlogPageViewModel> {
    if (!tag) {
      return this.getPageNoTag(pageNumber);
    }
    const posts = this.posts.filter(p => p.tags.indexOf(posts) > -1);
    return this.fetchThePages(pageNumber, posts, tag);
  }

  private getPageNoTag(pageNumber: number): Observable<BlogPageViewModel> {
    if (pageNumber > this.numberOfPages) {
      return this.getPageNoTag(0);
    }
    return this.fetchThePages(pageNumber, this.posts, null);
  }

  private fetchThePages(pageNumber: number, blogPostRecords: BlogPostRecord[], tag: string) {
    return forkJoin(blogPostRecords
      .slice(pageNumber * this.postsPerPage, (1 + pageNumber) * this.postsPerPage)
      .map(post => this.fetchPost(post))
    )
      .pipe(
        map(
          (posts: BlogPostViewModel[]) => {
            return new BlogPageViewModel(pageNumber, this.numberOfPages, posts, tag);
          }
        )
      );
  }

  getPost(id: string): Observable<BlogPostViewModel> {
    return this.fetchPost(this.posts.filter(p => p.path === id)[0]);
  }
}
