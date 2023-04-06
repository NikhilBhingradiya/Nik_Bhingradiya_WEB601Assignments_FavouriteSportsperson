import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { ContentCardComponent } from './content-card/content-card.component';

import { ContentlistComponent } from './contentlist/contentlist.component';
import { MessagesComponent } from './messages/messages.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { AddContentDialogueComponent } from './add-content-dialogue/add-content-dialogue.component';
import { CreateContentComponent } from './create-content/create-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,

    ContentlistComponent,
      MessagesComponent,
      ModifyContentComponentComponent,
      AddContentDialogueComponent,
      CreateContentComponent


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
