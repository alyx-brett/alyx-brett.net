import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './core/title/title.component';
import { AppRoutingModule } from './services/app-routing.module';
import { BlogModule } from './blog/blog.module';
import { MarkdownModule } from 'ngx-markdown';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    HttpClientModule,
    MarkdownModule.forRoot({sanitize: SecurityContext.NONE})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }