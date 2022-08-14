describe('My homowork1', () => {
    it ('tasks', async () => {
        await browser.url('https://webdriver.io/docs/api');
        await browser.pause(2000);


        //const getting_started = await $ ('.//*[contains(text(), "API Reference") and @href or @class="footer__link-item"]')
        //await  getting_started.saveScreenshot("getting_started.saveScreenshot.png");

        const api_r = await $ ('.//*[contains(text(), "API Reference") and @href]')
        //api_r.saveScreenshot("api.saveScreenshot.png");

        //const help = await $  ('.//*[contains(text(), "Help") and @href]')
        //await help.saveScreenshot("help.saveScreenshot.png");


        //const contribute = await $  ('.//*[contains(text(), "Contribute") and @class="footer__link-item"]')
        //await  contribute.saveScreenshot("contribute.saveScreenshot.png");


        //const docss = await $ ('.//*[contains(text(),"Docs") and @class="footer__title"]')
        //await docss.saveScreenshot("docss.saveScreenshot.png");

        //const community = await $ ('.//*[contains(text(),"Community") and @class="footer__title"]')
        //await community.saveScreenshot("community.saveScreenshot.png");

        //const stack_overflow = await $('.//*[@href="https://stackoverflow.com/questions/tagged/webdriver-io" and @rel="noopener noreferrer"]')
        //await stack_overflow.saveScreenshot("stack_overflow.saveScreenshot.png");

        //const slack = await $('.//*[@href="https://seleniumhq.slack.com/join/shared_invite/zt-f7jwg1n7-RVw4v4sMA7Zjufira_~EVw#/"and @rel="noopener noreferrer"]' )
        //await slack.saveScreenshot("slack.saveScreenshot.png");

        //const support_Chat = await $('.//*[@href="https://gitter.im/webdriverio/webdriverio"and @rel="noopener noreferrer"]' )
        //await support_Chat.saveScreenshot("support_Chat.saveScreenshot.png");

        //const twitter = await $('.//*[@href="https://twitter.com/webdriverio"and @rel="noopener noreferrer"]' )
        //await twitter.saveScreenshot("twitter.saveScreenshot.png");

        //const more = await $ ('.//*[contains(text(),"More") and @class="footer__title"]')
        //await more.saveScreenshot("more.saveScreenshot.png");

        //const tidelift_Subscription = await $('.//*[@href="https://webdriver.io/docs/enterprise.html"and @rel="noopener noreferrer" and @target="_blank"]' )
        //await tidelift_Subscription.saveScreenshot("tidelift_Subscription.saveScreenshot.png");

        //const donate_to_WebdriverIO = await $('.//*[@href="https://opencollective.com/webdriverio" and @target="_blank"]' )
        //await donate_to_WebdriverIO.saveScreenshot("donate_to_WebdriverIO.saveScreenshot.png");

        
        //const swag_Store = await $('.//*[@href="http://shop.webdriver.io" and @target="_blank"]' )
        //await swag_Store.saveScreenshot("swag_Store.saveScreenshot.png");

        //const blog = await $  ('.//*[contains(text(), "Blog") and @class="footer__link-item"]')
        //await  blog.saveScreenshot("blog.saveScreenshot.png");

        //const gitHub = await $('.//*[@href="https://github.com/webdriverio/webdriverio" and @class="footer__link-item"]' )
        //await gitHub.saveScreenshot("gitHub.saveScreenshot.png");



    })

});