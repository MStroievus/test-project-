class signinPage{

    get signinEamilfield() { return $('#login_field') };

    get signinPasswordfield() { return $('//*[@id="password"]') };

    get signinButton() { return $('//*[@id="login"]/div[4]/form/div/input[12]') };
    
    get forgotpasswordButton() { return $('[href="/password_reset"]') };






}
module.exports = new signinPage ()