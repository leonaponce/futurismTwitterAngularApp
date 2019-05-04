import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RandomTweetComponent } from './random-tweet/random-tweet.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RandomTweetComponent,
    SearchComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
