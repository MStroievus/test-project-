
describe('My homowork1', () => {
    it ('tasks', async () => {
        await browser.url('https://webdriver.io/')
        await browser.pause(2000);

        const needsButton = await $('[href="/docs/api"]')
        await browser.pause(2000);
        await needsButton.click();
        await browser.pause(2000);
        console.log(await browser.getUrl() + " it is Current Url ");

        const needsText = await $('[id="examples"]');
        console.log(await needsText.getText() + "  grasia");

        const jsonwire = await $("//*[text()='JSONWire protocol']")
        console.log(await jsonwire.getText() + " is it attribute"); 

        const searchButton = await $('[class="DocSearch-Button-Placeholder"]')
        await searchButton.click;
        await browser.pause(2000);

        buttom = await $ ('[class ="searchBox_qEbK"]')
        await buttom.click();
        await browser.pause(2000)
        const letters  = await $('#docsearch-input');
        await letters.setValue('text is')
        await browser.pause(2000);

        await letters.addValue(' Done')
        await browser.pause(5000);

    });
});
