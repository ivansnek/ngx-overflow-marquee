import { NgxOverflowMarqueeDemoPage } from './app.po';

describe('ngx-overflow-marquee-demo App', () => {
  let page: NgxOverflowMarqueeDemoPage;

  beforeEach(() => {
    page = new NgxOverflowMarqueeDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
