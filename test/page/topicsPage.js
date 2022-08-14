class topics {
    get labelTopic() {
        return $('//*[@id="js-pjax-container"]/div[2]/div/h1')
    }
}

module.exports = new topics();