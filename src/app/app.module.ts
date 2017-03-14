import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogpostComponent } from './Components/blogpost/blogpost.component';
import { BlogpostsComponent } from './Components/blogposts/blogposts.component';
import { BlogcommentComponent } from './Components/blogcomment/blogcomment.component';
import { BlogcommentsComponent } from './Components/blogcomments/blogcomments.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostComponent,
    BlogpostsComponent,
    BlogcommentComponent,
    BlogcommentsComponent,
    NavbarComponent
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
