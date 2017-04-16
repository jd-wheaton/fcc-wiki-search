import { SearchService, WIKIPEDIA_API_URL } from './search.service';

export const SearchInjectables: Array<any> = [
  {provide: SearchService, useClass: SearchService },
  {provide: WIKIPEDIA_API_URL, useValue: WIKIPEDIA_API_URL}
];
