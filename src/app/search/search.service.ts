import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SearchResult } from './search.result.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

export const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/w/api.php?';

@Injectable()
export class SearchService {
  constructor(private http: Http,
  @Inject(WIKIPEDIA_API_URL) private apiUrl: string) { }

  search(term: string): Observable<SearchResult[]> {
    const params: string = [
      `origin=*`,
      `action=query`,
      `format=json`,
      `prop=extracts`,
      `exchars=200`,
      `exlimit=max`,
      `explaintext`,
      `exintro`,
      `rawcontinue`,
      `generator=search`,
      `gsrnamespace=0`,
      `gsrlimit=10`,
      `gsrsearch=${term}`
    ].join('&');
    return this.http.get(`${this.apiUrl}${params}`)
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError);

  }

  private catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error || 'A server error has occured.');
  }

  private logResponse(response: Response) {
    console.log(response.json().query.pages);
  }

  private extractData(response: Response) {
    const result = (<any>response.json().query.pages);
    const data = (Object.keys(result).map(key => result[key]));
    return data.map(item => {
      return new SearchResult({
        id: item.pageid,
        title: item.title,
        description: item.extract,
        linkUrl: `https://en.wikipedia.org/?curid=${item.pageid}`
      });
    });
  }

}
