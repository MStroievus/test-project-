class gitHubPage {

    get sign_upButton() {
        return $('//*[contains(text(),"Sign up") and @class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-default rounded px-2 py-1"]')
    };

    get sign_upButtondown() {
        return $('/html/body/div[4]/main/div[2]/div[5]/div[4]/div/div/div[1]/a[1]')
    };
    get sss() {
        return $('//*[contains(text(),"Company")]')
    };

    get signinButton() { return $('/html/body/div[1]/header/div/div[2]/div[2]/div[2]/a') };

    get myName() {
        return $('[class="css-truncate-target"]')
    };

    get nameButton() {
        return $('/html/body/div[1]/header/div[7]/details/summary/span[1]');
    };
    
    get productsdropbox() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[1]/details/summary')
    };

    get exploredropbox() {
        return $('//*[contains(text(),"Explore") and @class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"]')
    }


    get pricedropbox() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/summary')
    };
 

    get signinButtonafter() {
        return $('//*[@id="login"]/div[4]/form/div/input[12]')
    };

    get plans() {
        return $('=Plans')
    };

    get input() {
        return $('/html/body/div[1]/header/div/div[2]/div[2]/div[1]/div/div/form/label/input[1]')
    };

    get exploreGitHub() {
        return $('=Explore GitHub')
    };

    get Enterprise() {
        return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[3]/a')
    };

    get careersButoon() {
        return $('/html/body/footer/div[1]/div/div[5]/ul/li[3]/a')
    }





}
module.exports = new gitHubPage();