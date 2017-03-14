import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { BlogcommentComponent } from './blogcomment/blogcomment.component';
import { BlogcommentsComponent } from './blogcomments/blogcomments.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostComponent,
    BlogpostsComponent,
    BlogcommentComponent,
    BlogcommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
