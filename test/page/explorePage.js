class exlore {


    get topicsButton() {
       return $('//*[@id="js-pjax-container"]/div[1]/nav/div/a[2]')
    }
}

module.exports = new exlore();