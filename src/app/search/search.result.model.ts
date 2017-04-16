/**
 * @SearchResultModel: object data structure of individual search records
 */
export class SearchResult {
  id: string;
  title: string;
  description: string;
  linkUrl: string;

  constructor(obj?: any) { // (obj?: any) simulation of keyword arguments
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.linkUrl = obj && obj.linkUrl || `https://en.wikipedia.org/?currid=${this.id}`;
  }
}
