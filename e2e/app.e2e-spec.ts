import { BlogularPage } from './app.po';

describe('blogular App', () => {
  let page: BlogularPage;

  beforeEach(() => {
    page = new BlogularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
