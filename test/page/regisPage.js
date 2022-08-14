class joinGitHubGitHubPage {

    get field_email() {
        return $('#email');
    }

    get continueButton() {
        return $('//*[@id="email-container"]/div[2]/button')
    };

    get field_password() {
        return $('#password');
    };

    get continueButton2() {
        return $('//*[@id="password-container"]/div[2]/button')
    };
    
    get nameField() {
        return $('#login')
    };

    get continueButton3() {
        return $('//*[@id="username-container"]/div[2]/button')
    };
    get yesornoField() {
        return $('#opt_in')
    };


    get continueButton4() {
        return $('//*[@id="opt-in-container"]/div[2]/button')
    };

    get needsLabel() {
        return $('[class="text-mono text-bold signup-text-prompt mt-4"]')
    }

    




}
module.exports = new joinGitHubGitHubPage ()