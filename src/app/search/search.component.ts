import { Component, OnInit } from '@angular/core';
import { SearchResult } from './search.result.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor() { }
  ngOnInit() { }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log('results: ', this.results);
  }

}
