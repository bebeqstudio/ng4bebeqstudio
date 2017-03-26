import { Ng4bebeqstudioPage } from './app.po';

describe('ng4bebeqstudio App', () => {
  let page: Ng4bebeqstudioPage;

  beforeEach(() => {
    page = new Ng4bebeqstudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
