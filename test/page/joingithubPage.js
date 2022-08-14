class joingitHubPage {


    get user_login() { return $('#user_login') };
    get user_email() { return $('#user_email') };
    get passwordField() { return $('//*[@id="user_password"]') };
    get label() { return $('[class="f4 mb-3"]') };

}
module.exports = new joingitHubPage();