import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './core/title/title.component';
import { AppRoutingModule } from './services/app-routing.module';
import { NavComponent } from './core/nav/nav.component';
import { BlogModule } from './blog/blog.module';
import {MarkdownModule} from 'ngx-markdown';
import { AboutPageComponent } from './pages/about/about-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
