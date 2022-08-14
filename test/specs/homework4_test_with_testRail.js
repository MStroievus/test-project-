describe('Homework4 with TestRail', () => {
   it('Checking valid data entry in the "Email-Address " field', async () => { 
       await browser.url('https://github.com/')
       await browser.pause(2000);

       const input = await $('body > div.application-main > main > div.overflow-hidden > div.home-hero-container.position-relative.js-webgl-globe-data > div.home-hero.position-absolute.z-1.top-0.right-0.bottom-0.left-0.overflow-hidden > div > div > div.col-12.col-lg-7.text-center.text-md-left > form > div > button')
       await input.click();
       await browser.pause(2000);

       const click_for_field = $ ('body > div.application-main.d-flex.flex-auto.flex-column > main > div.d-flex.flex-auto.flex-justify-center.pt-12 > text-suggester > div.m-4.p-4.f4.color-shadow-small.bg-gray-800-mktg.rounded-2.signup-content-container')
       await click_for_field.click();
       await browser.pause(2000);

       const letters_for_field = await $('[id="email"]')
       await letters_for_field.setValue('Ukrainewillwin@gmail.com');
       await browser.pause(2000);

       const countinueButton = $('#email-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')
       await countinueButton.click();
       await browser.pause(2000);

       const password_field = $('[id="password"]')
       let password_is_displayed =  await password_field.isDisplayed();
       console.log( "NEEEEEEEEEEEEEEEEEEEEED answer :" + password_is_displayed )
    });

    it('Checking the entry of invalid data in the "Email Address" field', async () => { 

       await browser.url('https://github.com/')
       await browser.pause(2000);

       const input = await $('body > div.application-main > main > div.overflow-hidden > div.home-hero-container.position-relative.js-webgl-globe-data > div.home-hero.position-absolute.z-1.top-0.right-0.bottom-0.left-0.overflow-hidden > div > div > div.col-12.col-lg-7.text-center.text-md-left > form > div > button')
       await input.click();
       await browser.pause(2000);

       const click_for_field = $ ('body > div.application-main.d-flex.flex-auto.flex-column > main > div.d-flex.flex-auto.flex-justify-center.pt-12 > text-suggester > div.m-4.p-4.f4.color-shadow-small.bg-gray-800-mktg.rounded-2.signup-content-container')
       await click_for_field.click();
       await browser.pause(2000);

       const letters_for_field = await $('[id="email"]')
       await letters_for_field.setValue('Ukrainewillwingmail.com');
       await browser.pause(2000);


       const countinueButton = $('#email-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button')
       await countinueButton.click();
       await browser.pause(2000);

       const email_err = await $ ('[id="email-err"]');
       let email_err_isDisplayed = await email_err.isDisplayed();
       console.log("Іs the letter being displayed? : " + email_err_isDisplayed)
    });
   
   it('Checking  valid data entry into the "Search GitHub" field', async () => {

      await browser.url('https://github.com')
      await browser.pause(2000);

      const search_field = await $('[placeholder="Search GitHub"]')
      await search_field.click();
      await browser.pause(2000);

      await search_field.setValue('JavaScript')
      await browser.pause(2000);

      const hidden_button = await $('[id="jump-to-suggestion-search-global"]')
      await hidden_button.click();
      await browser.pause(2000);

      const page = await $('[id="js-pjax-container"]')
      let needs_page = await page.isDisplayed();
      console.log("Did we find the page ? " + needs_page);
   });
   
   it('Checking  invalid data entry into the "Search GitHub" field', async () => {

      await browser.url('https://github.com')
      await browser.pause(2000);

      const search_field = await $('[placeholder="Search GitHub"]')
      await search_field.click();
      await browser.pause(2000);

      await search_field.setValue('@#@#$@#$')
      await browser.pause(2000);

      const hidden_button = await $('[id="jump-to-suggestion-search-global"]')
      await hidden_button.click();
      await browser.pause(2000);


      const mail = await $('//*[@id="js-pjax-container"]/div/div[3]/div/div/h3')
      let mailisDisplayed =  await mail.isDisplayed();
      console.log("Did we find the message ? " + mailisDisplayed);
   
   });


   it('Cheking clickable button on the footer site', async () => {

      await browser.url('https://github.com')
      await browser.pause(2000);

      const docs_Button = await $('//*[contains(text(),"Docs") and @href="https://docs.github.com"]')
      await docs_Button.scrollIntoView();
      await browser.pause(2000);

      let clickable = await docs_Button.isClickable();
      console.log(clickable); // outputs: true 
      
      await browser.waitUntil(() => docs_Button.isClickable()); // wait for element to be clickable
      await browser.pause(2000);

      await docs_Button.click();
      await browser.pause(2000);
   
   });

    

});