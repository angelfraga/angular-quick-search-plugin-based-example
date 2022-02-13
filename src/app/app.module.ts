import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightsModule } from './flights/flights.module';
import { AppSdkModule } from './app-sdk/app-sdk.module';
import { CitiesModule } from './cities/cities.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppSdkModule,
    CitiesModule,
    FlightsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
