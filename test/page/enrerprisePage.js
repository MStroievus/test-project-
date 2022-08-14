class enrerprisePage {


    get enrerpriseButton() {
       return $('/html/body/div[4]/main/div[1]/div/div[1]/div[1]/a[1]')
    };

    get enterprisecloudButton() {
        return $('//*[@id="js-pjax-container"]/div/div[2]/div/div/div[1]/a/div/div')
    };

     get enterpriseserverButton() {
        return $('//*[@id="js-pjax-container"]/div/div[2]/div/div/div[2]/a/div/div')
    };

}
module.exports = new enrerprisePage();