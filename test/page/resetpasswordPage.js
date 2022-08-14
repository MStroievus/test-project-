class resetpasswordPage {
    get resetField() {
        return $('//*[@id="email_field"]')
    }
}

module.exports = new resetpasswordPage();