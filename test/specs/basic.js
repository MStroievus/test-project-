
const mainPage = require('../page/main.page');


describe('My test', async () => {
    it('tasks', async () => { 
        await browser.url('https://v5.webdriver.io/')
        mainPagetest.searchInput.addValue('test');
        await browser.pause(2000);
        mainPagetest.setUserName('teksdjglkgsd')
        await browser.pause(2999);
    })
});