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
export class CitiesQuickSearchAdapterService implements QuickSearchAdapter {
  private readonly cities: QuickSearchItem[] = [
    { title: 'Madrid', data: 1 },
    { title: 'Barcelona', data: 2 },
    { title: 'Köln', data: 3 },
    { title: 'Paris', data: 4 },
  ];

  search(term: string): QuickSearchItem[] | Observable<QuickSearchItem[]> {
    const items: QuickSearchItem[] = this.cities.filter((item) =>
      item.title.localeCompare(term)
    );
    return of(items).pipe(delay(1800));
  }
  select(item: QuickSearchItem): void {
    console.log(`/cities/${item.data}`);
  }
}
