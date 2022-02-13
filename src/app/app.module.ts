import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuickSearchComponent } from './app-sdk/quick-search/quick-search.component';
import { FlightsModule } from './flights/flights.module';
import { AppSdkModule } from './app-sdk/app-sdk.module';

@NgModule({
  imports: [BrowserModule, FormsModule, FlightsModule, AppSdkModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
