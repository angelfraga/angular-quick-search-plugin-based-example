import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSdkModule } from '../app-sdk/app-sdk.module';
import { ArrivalsQuickSearchAdapterService } from './arrivals-quick-search-adapter.service';

@NgModule({
  imports: [
    CommonModule,
    AppSdkModule.forChild({
      quickSearchGroups: [
        {
          title: 'Arrivals',
          adapter: ArrivalsQuickSearchAdapterService,
        },
      ],
    }),
  ],
  declarations: [],
})
export class FlightsModule {}
