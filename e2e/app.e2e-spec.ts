import { Angular2AppHomeworkPage } from './app.po';

describe('angular2-app-homework App', function() {
  let page: Angular2AppHomeworkPage;

  beforeEach(() => {
    page = new Angular2AppHomeworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
