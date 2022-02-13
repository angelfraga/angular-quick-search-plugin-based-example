import { CommonModule } from '@angular/common';
import {
  Inject,
  Injector,
  ModuleWithProviders,
  NgModule,
  Optional,
} from '@angular/core';
import {
  QuickSearchConfig,
  QUICK_SEARCH_CONFIG,
} from './quick-search/quick-search';
import { QuickSearchComponent } from './quick-search/quick-search.component';
import { QuickSearchService } from './quick-search/quick-search.service';

@NgModule({
  imports: [CommonModule],
  declarations: [QuickSearchComponent],
  exports: [QuickSearchComponent],
})
export class AppSdkModule {
  static forChild(
    config: QuickSearchConfig
  ): ModuleWithProviders<AppSdkModule> {
    return {
      ngModule: AppSdkModule,
      providers: [
        { provide: QUICK_SEARCH_CONFIG, multi: true, useValue: config },
      ],
    };
  }

  constructor(
    @Optional() @Inject(QUICK_SEARCH_CONFIG) configs: QuickSearchConfig[],
    injector: Injector
  ) {
    QuickSearchService.registerQuickSearchGroups(injector, configs);
  }
}
