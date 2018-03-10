import { MeanSrcPage } from './app.po';

describe('mean-src App', function() {
  let page: MeanSrcPage;

  beforeEach(() => {
    page = new MeanSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
