const gitHubPage = require("../page/gitHubPage");
const regisPage = require("../page/regisPage");
const random = require("../page/random");
const joingithubPage = require("../page/joingithubPage.js");
const signinPage = require("../page/signinPage.js");
const resetpasswordPage = require("../page/resetpasswordPage");
const actionsPage = require("../page/actionsPage");
const pricingPage = require("../page/pricingPage");
const explorePage = require("../page/explorePage");
const topicsPage = require("../page/topicsPage");
const searchPage = require("../page/searchPage");
const typeScriptPage = require("../page/typeScriptPage");
const enrerprisePage = require("../page/enrerprisePage.js");
const trialRequestPage = require("../page/trialRequestPage");
const careesPage = require("../page/careesPage");

describe('My tasks', () => {
    xit ('tasks1', async () => {
        await browser.url('https://github.com/')
        await browser.pause(2000);

        
        actionsPage.metodClick(gitHubPage.sign_upButtondown);
        await browser.pause(2000);
        await browser.waitUntil(() => regisPage.field_email.isClickable());
        
       
        await regisPage.field_email.addValue(random.randomEmail());
        await browser.pause(2000)

        actionsPage.metodClick(regisPage.continueButton);
        await browser.pause(2000);

        
        await regisPage.field_password.addValue(random.randomPassword());
        await browser.pause(2000);

        actionsPage.metodClick(regisPage.continueButton2);
        await browser.pause(2000);

      
        await regisPage.nameField.addValue(random.randomName());
        await browser.pause(2000);

        actionsPage.metodClick(regisPage.continueButton3);
        await browser.pause(2000);

        await regisPage.yesornoField.addValue('n');
        await browser.pause(2000);

        actionsPage.metodClick(regisPage.continueButton4);
        await browser.pause(2000);

        
        console.log(await browser.getUrl());
        await expect(regisPage.needsLabel).toHaveTextContaining('Verify your account')
        await browser.pause(2000);
        //await expect(browser).toHaveUrl('https://github.com/join');
        //await browser.pause(2000);

    });

    xit('tasks2', async () => {
        await browser.url('https://github.com/join')
        await browser.pause(2000);

        joingithubPage.user_login.addValue(random.randomName());
        await browser.pause(2000);


        joingithubPage.user_email.addValue(random.randomEmail());
        await browser.pause(2000);
      
        joingithubPage.passwordField.addValue(random.randomPassword());
        await browser.pause(2000);
      

        console.log(await browser.getUrl());
        await expect(browser).toHaveUrl('https://github.com/join');
        console.log(await joingithubPage.label.isDisplayed());
    });
  
  
   xit('tasks3', async () => { 
        await browser.url('https://github.com')
        await browser.pause(2000);
      
        actionsPage.metodClick(gitHubPage.signinButton);
        await browser.pause(2000);
      
        signinPage.signinEamilfield.addValue('Tomato_gn@i.ua');     
        await browser.pause(2000);

        signinPage.signinPasswordfield.addValue('qwASDzxcv12')      
        await browser.pause(2000);

        actionsPage.metodClick(gitHubPage.signinButtonafter);
        await browser.pause(2000);
      
        console.log(await browser.getUrl());
        await expect(browser).toHaveUrl('https://github.com/');
      
        actionsPage.metodClick(gitHubPage.nameButton);
        await browser.pause(2000);
      
        await expect(gitHubPage.myName).toHaveText('testaccountssss');
        await browser.pause(2000);
        
    });
  
  
    xit('tasks4', async () => { 
        
        await browser.url('https://github.com')
        await browser.pause(2000);
        
        actionsPage.metodClick(gitHubPage.signinButton);
        await browser.pause(2000);
      
        actionsPage.metodClick(signinPage.forgotpasswordButton);
        await browser.pause(2000);
        
        resetpasswordPage.resetField.addValue(random.randomEmail());
        await browser.pause(2000);

        resetpasswordPage.resetField.setValue('олр"@gmail.com'); 
        await browser.pause(2000);
      
        resetpasswordPage.resetField.setValue('іавпFD#$%.@com'); 
        await browser.pause(2000);
      
        resetpasswordPage.resetField.setValue('111#gmail.com'); 
        await browser.pause(2000);
      
        resetpasswordPage.resetField.setValue('SFFFS@gmail.'); 
        await browser.pause(2000);
      
        resetpasswordPage.resetField.setValue('@#$%@gmail.com'); 
        await browser.pause(2000);
      
        resetpasswordPage.resetField.setValue('@gmail.com'); 
        await browser.pause(2000);

      
        // const message = await ('#js-pjax-container > div > div.auth-form-body.mt-3 > p')
        // await expect(message).toHaveTextContaining('Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.')
    });
  
    it('tasks5', async () => { 
      await browser.url('https://github.com')
      await browser.pause(2000);  

      actionsPage.metodClick(gitHubPage.input);
      await browser.pause(2000);

      actionsPage.metodMoveToElement(gitHubPage.productsdropbox);
      console.log(await gitHubPage.productsdropbox.isDisplayed());
      await browser.pause(3000);  

      actionsPage.metodMoveToElement(gitHubPage.exploredropbox);
      console.log(await gitHubPage.exploredropbox.isDisplayed());
      await browser.pause(3000);  

      actionsPage.metodMoveToElement(gitHubPage.pricedropbox);
      console.log(await gitHubPage.pricedropbox.isDisplayed());
      await browser.pause(3000); 

    });
  
    it('tasks6', async () => {
        await browser.url('https://github.com')
        await browser.pause(2000);
      
        actionsPage.metodClick(gitHubPage.input);
        await browser.pause(2000);

        actionsPage.metodMoveToElement(gitHubPage.pricedropbox);
        await browser.pause(2000);

      
        actionsPage.metodMoveToElement(gitHubPage.plans);
        actionsPage.metodClick(gitHubPage.plans);
        await browser.pause(2000);


        actionsPage.metodClick(pricingPage.freeButtom);
        await browser.pause(2000);
        
    
        joingithubPage.user_login.addValue(random.randomName());
        await browser.pause(2000);

        joingithubPage.user_email.addValue(random.randomEmail());
        await browser.pause(2000);
      
        joingithubPage.passwordField.addValue(random.randomPassword());
        await browser.pause(2000);
        
        await browser.back();
        await browser.pause(2000);

        await browser.back();
        await browser.pause(2000);
        
        actionsPage.metodClick(gitHubPage.plans);
        await browser.pause(2000);

        actionsPage.metodMoveToElement(gitHubPage.exploredropbox);
        await browser.pause(2000);

        actionsPage.metodMoveToElement(gitHubPage.exploreGitHub);
        await browser.pause(2000);

        actionsPage.metodClick(gitHubPage.exploreGitHub);
        await browser.pause(2000);

        actionsPage.metodClick(explorePage.topicsButton);
        await browser.pause(3000);
        
        console.log( "is it true ?????   "   +  await topicsPage.labelTopic.isDisplayed()) 
    });

    it('tasks7', async () => { 
       
        await browser.url('https://github.com')
        await browser.pause(2000);
      
        actionsPage.metodClick(gitHubPage.input);
        await browser.pause(2000);

        gitHubPage.input.addValue('WebDriverIO')
        await browser.pause(2000);


        await browser.keys('\uE007');
        await browser.pause(2000);


        actionsPage.metodClick(searchPage.typeScript);
        await browser.pause(2000);

        actionsPage.metodClick(typeScriptPage.firstitem);
        await browser.pause(2000);

    
        console.log(await browser.getUrl())
        
        await expect(browser).toHaveUrlContaining('webdriverio')
        await browser.pause(2000);
    });

    it('tasks8', async () => {

        await browser.url('https://github.com')
        await browser.pause(2000); 

        actionsPage.metodClick(gitHubPage.Enterprise);
        await browser.pause(2000);

        actionsPage.metodClick(enrerprisePage.enrerpriseButton);
        await browser.pause(2000);

        actionsPage.metodClick(enrerprisePage.enterprisecloudButton);
        await browser.pause(2000);

        joingithubPage.user_login.addValue(random.randomName());
        await browser.pause(2000);


        joingithubPage.user_email.addValue(random.randomEmail());
        await browser.pause(2000);
      
        joingithubPage.passwordField.addValue(random.randomPassword());
        await browser.pause(4000);

        await browser.back();
        await browser.pause(2000);

        actionsPage.metodClick(enrerprisePage.enterpriseserverButton);
        await browser.pause(2000);

        trialRequestPage.nameField.addValue(random.randomName());
        await browser.pause(2000);

        trialRequestPage.companyField.addValue(random.randomName());
        await browser.pause(2000);

        trialRequestPage.emailField.addValue(random.randomEmail());
        await browser.pause(2000);

        trialRequestPage.phoneField.addValue(random.randomPhone());
        await browser.pause(2000);

        actionsPage.metodClick(trialRequestPage.notSureYeticon);
        await browser.pause(2000);

        actionsPage.metodClick(trialRequestPage.questionsYesicon);
        await browser.pause(2000);

        trialRequestPage.questionsList.addValue(random.randomName());
        await browser.pause(2000);

        actionsPage.metodClick(trialRequestPage.agreeicon);
        await browser.pause(2000);
   
    });
    
    it('tasks9', async () => {

        await browser.url('https://github.com/')
        await browser.pause(2000);

        actionsPage.metodClick(gitHubPage.careersButoon);
        await browser.pause(2000);

        actionsPage.metodClick(careesPage.openPositionButton);
        await browser.pause(2000);

        console.log(await careesPage.businessSystemsdropbox.getText() + " for better looking");
        console.log(await careesPage.designdropbox.getText() + " or better looking");
        console.log(await careesPage.engineeringdropbox.getText() + " for better looking");
        console.log(await careesPage.financedropbox.getText() + " for better looking");
        console.log(await careesPage.hRdropbox.getText() + " for better looking");
        console.log(await careesPage.legaldropbox.getText() + " for better looking");
        console.log(await careesPage.operationsdropbox.getText() + " for better looking");
        console.log(await careesPage.productdropbox.getText() + " for better looking");
        console.log(await careesPage.salesdropbox.getText() + " for better looking");
        console.log(await careesPage.securitydropbox.getText() + "  for better looking");
        console.log(await careesPage.supportdropbox.getText() + " for better looking");
        
    });







});