import { Component, OnInit } from '@angular/core';
import { QuickSearchItem } from './quick-search';
import { QuickSearchService } from './quick-search.service';

@Component({
  selector: 'app-quick-search',
  templateUrl: 'quick-search.component.html',
  styleUrls: ['quick-search.component.css'],
})
export class QuickSearchComponent {
  readonly groups = this.quickSearchService.groups$;

  readonly result$ = this.quickSearchService.result$;

  constructor(private quickSearchService: QuickSearchService) {}

  onSelect(key: string, item: QuickSearchItem) {
    this.quickSearchService.select(key, item);
  }

  onSearch(event: Event) {
    this.quickSearchService.search((event.target as HTMLInputElement).value);
  }
}
