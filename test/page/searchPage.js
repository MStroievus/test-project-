class searchPage {
 
    get typeScript() {
        return $('//*[@id="js-pjax-container"]/div/div[2]/div[1]/ul/li[2]/a');
    }
    get firstitem() {
        return $('//*[@id="js-pjax-container"]/div/div[3]/div/ul/li[1]/div[2]/div[1]/div[1]/a');
    }
}

module.exports = new searchPage();