describe('Controller: Omega Controller', function () {
  it('displays a list of students on click of Display Students button', function () {
      browser.url('/');
      browser.click('button=Display Students');
      expect(browser.getText('li=Moi')).to.exist;
      expect(browser.getText('li=Kara')).to.exist;
    });
});
