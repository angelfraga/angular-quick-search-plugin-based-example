import { InjectionToken, ProviderToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface QuickSearchItem {
  icon?: string;
  title: string;
  description?: string;
  data?: unknown;
}

export interface QuickSearchAdapter {
  search(term: string): QuickSearchItem[] | Observable<QuickSearchItem[]>;
  select(item: QuickSearchItem): void;
}

export interface QuickSearchGroup {
  title: string;
  adapter: ProviderToken<QuickSearchAdapter>;
}

export interface QuickSearchConfig {
  quickSearchGroups: QuickSearchGroup[];
}

export const QUICK_SEARCH_CONFIG = new InjectionToken<QuickSearchConfig>(
  'Quick Search Config'
);
