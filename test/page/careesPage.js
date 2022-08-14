class  careersPage {


    get openPositionButton() {
       return $('/html/body/div[4]/main/div[2]/div/div[1]/div/p[2]/a[1]')
    };

    get businessSystemsdropbox() {
        return $('#business-systems > div > h3 > button > span.text-left.flex-auto.py-4')
    };
              
    get designdropbox() {
        return $('//*[@id="design"]/div/h3/button/span[1]')
    };

    get engineeringdropbox() {
        return $('//*[@id="engineering"]/div/h3/button/span[1]')
    };

    get financedropbox() {
        return $('//*[@id="finance"]/div/h3/button/span[1]')
    };

    get hRdropbox() {
        return $('//*[@id="human-resources"]/div/h3/button/span[1]')
    };

    
    get legaldropbox() {
        return $('//*[@id="legal"]/div/h3/button/span[1]')
    };

    
    get operationsdropbox() {
        return $('//*[@id="operations"]/div/h3/button/span[1]')
    };

    
    get productdropbox() {
        return $('//*[@id="product"]/div/h3/button/span[1]')
    };

    
    get salesdropbox() {
        return $('//*[@id="sales"]/div/h3/button/span[1]')
    };

    
    get securitydropbox () {
        return $('//*[@id="security"]/div/h3/button/span[1]')
    };

    get supportdropbox() {
        return $('//*[@id="support"]/div/h3/button/span[1]')
    };



}

module.exports = new careersPage();