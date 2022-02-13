import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import {
  QuickSearchAdapter,
  QuickSearchItem,
} from '../app-sdk/quick-search/quick-search';

@Injectable({
  providedIn: 'root',
})
export class DeparturesQuickSearchAdapterService implements QuickSearchAdapter {
  private readonly fligths: QuickSearchItem[] = [
    { title: 'RY4701', data: 1 },
    { title: 'VY2002', data: 2 },
    { title: 'CA0005', data: 3 },
  ];

  search(term: string): QuickSearchItem[] | Observable<QuickSearchItem[]> {
    const items: QuickSearchItem[] = this.fligths.filter((item) =>
      item.title.localeCompare(term)
    );
    return of(items).pipe(delay(1800));
  }
  select(item: QuickSearchItem): void {
    console.log(`/flights/${item.data}`);
  }
}
