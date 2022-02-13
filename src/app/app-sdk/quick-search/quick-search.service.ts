import { Injectable, Injector } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  map,
  Observable,
  of,
  startWith,
  Subject,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import {
  QuickSearchAdapter,
  QuickSearchConfig,
  QuickSearchItem,
} from './quick-search';

@Injectable({
  providedIn: 'root',
})
export class QuickSearchService {
  private static readonly _groups = new BehaviorSubject<
    Map<string, QuickSearchAdapter>
  >(new Map());
  private static readonly _search = new Subject<string>();
  private static readonly _result = new BehaviorSubject<
    { key: string; items: QuickSearchItem[] }[]
  >([]);

  readonly groups$ = QuickSearchService._groups.asObservable();
  readonly result$ = QuickSearchService._result.asObservable();
  readonly search$ = QuickSearchService._search.asObservable();

  private static collectAdaptersResult(
    query: string,
    groups: Map<string, QuickSearchAdapter>
  ): Observable<{ key: string; items: QuickSearchItem[] }[]> {
    const requests$ = Array.from(groups.entries()).map(([key, adapter]) => {
      const result = adapter.search(query);
      if (result instanceof Observable) {
        return result.pipe(
          map((items) => ({ key, items })),
          catchError(() =>
            of({
              key,
              items: [{ title: 'Error fetching data' }],
            })
          ),
          startWith({ key, items: [] })
        );
      }
      return of({ items: result, key });
    });
    return combineLatest(requests$);
  }

  static registerQuickSearchGroups(
    injector: Injector,
    configs: QuickSearchConfig[]
  ): void {
    type MappedConfigs = [string, QuickSearchAdapter][];

    const allGroups = configs.reduce<MappedConfigs>((acc, config) => {
      const groups = config.quickSearchGroups.reduce<MappedConfigs>(
        (acc2, group) => {
          const adapter = injector.get<QuickSearchAdapter>(group.adapter);
          return [...acc2, [group.title, adapter]];
        },
        []
      );
      return [...acc, ...groups];
    }, []);

    const groups = new Map(allGroups);

    this._groups.next(groups);
  }

  constructor() {
    QuickSearchService._search
      .pipe(
        withLatestFrom(QuickSearchService._groups),
        switchMap(([query, groups]) =>
          QuickSearchService.collectAdaptersResult(query, groups)
        )
      )
      .subscribe((result) => QuickSearchService._result.next(result));
  }

  search(term: string) {
    QuickSearchService._search.next(term);
  }

  select(key: string, item: QuickSearchItem) {
    QuickSearchService._groups.value.get(key)?.select(item);
  }
}
