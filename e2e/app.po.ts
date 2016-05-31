export class ChangeCalculatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('change-calculator-app h1')).getText();
  }
}
