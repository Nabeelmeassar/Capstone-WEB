import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './compnents/post/post.component';
import { PostsService} from './services/posts.service';
// @ts-ignore

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule,
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
