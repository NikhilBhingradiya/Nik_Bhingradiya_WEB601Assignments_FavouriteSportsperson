import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { ContentCardComponent } from './content-card/content-card.component';

import { ContentlistComponent } from './contentlist/contentlist.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,

    ContentlistComponent,
      MessagesComponent


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
