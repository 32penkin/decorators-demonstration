import { DecorationsDemonstrationPage } from './app.po';

describe('decorations-demonstration App', function() {
  let page: DecorationsDemonstrationPage;

  beforeEach(() => {
    page = new DecorationsDemonstrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
