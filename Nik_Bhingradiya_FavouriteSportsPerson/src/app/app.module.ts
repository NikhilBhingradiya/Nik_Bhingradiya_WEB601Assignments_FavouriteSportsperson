import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ContentCardComponent } from './content-card/content-card.component';
import { HoverAffectDirective } from './hover-affect.directive';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { MessagesComponent } from './messages/messages.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { AddContentDialogueComponent } from './add-content-dialogue/add-content-dialogue.component';
import { CreateContentComponent } from './create-content/create-content.component';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { MessagesComponent } from './messages/messages.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddContentDialogComponent } from './add-content-dialogue/add-content-dialogue.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentlistComponent,
    
    HoverAffectDirective,
    CreateContentComponent,
    MessagesComponent,
  
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
