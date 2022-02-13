import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import {
  QuickSearchAdapter,
  QuickSearchItem,
} from '../app-sdk/quick-search/quick-search';

@Injectable({
  providedIn: 'root',
})
export class ArrivalsQuickSearchAdapterService implements QuickSearchAdapter {
  private readonly cities: QuickSearchItem[] = [
    { title: 'RY4700', data: 1 },
    { title: 'VY2001', data: 2 },
    { title: 'CA0000', data: 3 },
    { title: 'RY4700', data: 1 },
    { title: 'VY2001', data: 2 },
    { title: 'CA0000', data: 3 },
  ];

  search(term: string): QuickSearchItem[] | Observable<QuickSearchItem[]> {
    const items: QuickSearchItem[] = this.cities.filter((item) =>
      item.title.localeCompare(term)
    );
    return of(items).pipe(delay(1800));
  }
  select(item: QuickSearchItem): void {
    console.log(`/flight/${item.data}`);
  }
}
