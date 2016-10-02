import { ZodiacV2Page } from './app.po';

describe('zodiac-v2 App', function() {
  let page: ZodiacV2Page;

  beforeEach(() => {
    page = new ZodiacV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
