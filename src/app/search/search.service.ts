import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SearchResult } from './search.result.model';

export const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/w/api.php?';

@Injectable()
export class SearchService {
  constructor(private http: Http,
  @Inject(WIKIPEDIA_API_URL) private apiUrl: string) { }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `action=opensearch`,
      `format=json`,
      `search=${query}`,
      `callback=?`
    ].join('&');
    const queryUrl = `${this.apiUrl}&${params}`;
    return this.http.get(queryUrl)
    .map((response: Response) => {
      return (<any>response.json()).items.map(item => {
        return new SearchResult({
          //id: item.pageid,
          title: item.title,
          description: item.extract,
          linkUrl: item.link
        });
      });
    });
  }
}
