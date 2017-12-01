import { browser, element, by } from 'protractor';

export class NgxOverflowMarqueeDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
