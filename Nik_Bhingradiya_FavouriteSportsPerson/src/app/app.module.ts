import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentlistComponent } from './contentlist/contentlist.component';
import { ContentTypeFilterPipe } from './content-type-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { ContentFilterPipe } from './contentlist/content-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentlistComponent,
    ContentTypeFilterPipe,
    HoverAffectDirective,
    ContentFilterPipe


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
