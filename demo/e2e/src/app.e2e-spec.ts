import { AngularMaterialExtensionsTextDemoPage } from './app.po';

describe('@angular-material-extensions/typography-demo App', () => {
  let page: AngularMaterialExtensionsTextDemoPage;

  beforeEach(() => {
    page = new AngularMaterialExtensionsTextDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
