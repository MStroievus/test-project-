class typeScriptPage {
    get firstitem() {
        return $('//*[@id="js-pjax-container"]/div/div[3]/div/ul/li[1]/div[2]/div[1]/div[1]/a');
    }
}

module.exports = new typeScriptPage();