import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSdkModule } from '../app-sdk/app-sdk.module';
import { CitiesQuickSearchAdapterService } from './cities-quick-search-adapter.service';

@NgModule({
  imports: [
    CommonModule,
    AppSdkModule.forChild({
      quickSearchGroups: [
        {
          title: 'Cities',
          adapter: CitiesQuickSearchAdapterService,
        },
      ],
    }),
  ],
  declarations: [],
})
export class CitiesModule {}
