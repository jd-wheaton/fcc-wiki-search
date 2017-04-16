import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search/search.result.component';
import { SearchBoxComponent } from './search/search.box.component';
import { SearchInjectables } from './search/search.injectables';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
