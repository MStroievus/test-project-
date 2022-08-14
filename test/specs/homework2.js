const { isLength } = require("lodash");
const { async } = require("rxjs")

describe('My homowork2', () => {
    it ('task 1-15' , async () => {
    await browser.url('https://webdriver.io/docs/api.html')
    await browser.pause(2000);


    const input1 = await $('//*[text()="JSONWire protocol"] ');
    let attr =  await input1.getAttribute('href')
    await browser.newWindow(attr);
    await browser.pause(2000);

    const buttonsTerms = await $(' [href="#terms-and-concepts"]')
    let isDisplayed =  await buttonsTerms.isDisplayed();
    console.log( await isDisplayed );
    await browser.pause(2000);

    await browser.switchWindow('https://webdriver.io/docs/api')
    await browser.pause(2000);

    const elem = await $("//*[text()='Introduction']")
    await elem.waitUntil(async function () {
        return (await this.getText()) === 'Introduction'
    }, {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s'
        });
        
    await elem.saveScreenshot("elem.saveScreenshot.png")
    const twitterButton = await $('[href="https://twitter.com/webdriverio"]')
    let isDisplayed3 =  await twitterButton.isDisplayed(); 
    console.log(isDisplayed3); 

    let isDisplayedInViewport = await $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
    console.log( await isDisplayedInViewport); 


    const letscroll = await $ ('[href="https://twitter.com/webdriverio"]')
    await letscroll.scrollIntoView();
    await browser.pause(4000);

    const twitterButton1 = await $('[href="https://twitter.com/webdriverio"]')
    let isDisplayed2 =  await twitterButton1.isDisplayed(); 
    console.log(isDisplayed2 );

    let isDisplayedInViewport3 = await $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
    console.log( await isDisplayedInViewport3 );

    const blogButton = await $('[href="/blog"]');
    console.log(await blogButton.isFocused());
    
    await blogButton.click()
    await browser.pause(4000);

    const blogButton1 = await $('[href="/blog"]');
    console.log(await blogButton1.isFocused())
    });

    
    
});
