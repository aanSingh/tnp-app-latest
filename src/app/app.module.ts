import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { PostDescriptionComponent } from './components/post-description/post-description.component';
import { PostsWrapperComponent } from './components/posts-wrapper/posts-wrapper.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SideNavComponent, CompanyInfoComponent, WelcomePageComponent, PostDescriptionComponent, PostsWrapperComponent, PostComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
