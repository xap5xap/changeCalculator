import { ChangeCalculatorPage } from './app.po';

describe('change-calculator App', function() {
  let page: ChangeCalculatorPage;

  beforeEach(() => {
    page = new ChangeCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('change-calculator works!');
  });
});
