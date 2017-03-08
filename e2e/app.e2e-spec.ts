import { Ngconf2017TestDemoPage } from './app.po';

describe('ngconf2017-test-demo App', () => {
  let page: Ngconf2017TestDemoPage;

  beforeEach(() => {
    page = new Ngconf2017TestDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
