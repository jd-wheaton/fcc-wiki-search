import { FccWikiSearchPage } from './app.po';

describe('fcc-wiki-search App', () => {
  let page: FccWikiSearchPage;

  beforeEach(() => {
    page = new FccWikiSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
