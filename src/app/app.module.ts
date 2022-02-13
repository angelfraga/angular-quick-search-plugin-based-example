import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuickSearchComponent } from './quick-search/quick-search.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, QuickSearchComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
