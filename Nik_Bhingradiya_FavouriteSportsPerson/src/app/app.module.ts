import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { ContentCardComponent } from './content-card/content-card.component';

import { ContentlistComponent } from './contentlist/contentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,

    ContentlistComponent


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
