class actions {

    metodClick(element) {
        element.click();
    }

    metodMoveToElement(element) {
        element.waitForDisplayed();
        element.moveTo();
    } 

    metodGetText(element) {
     element.getText()
    }

}
module.exports = new actions();