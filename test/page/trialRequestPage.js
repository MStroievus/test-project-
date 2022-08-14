class trialRequestPage {
    get nameField() {
        return $('#contact_request_name')
    };
    get companyField() {
        return $('#contact_request_organization_name')
    };
     get emailField() {
        return $('#contact_request_email')
    };
    get phoneField() {
        return $('#contact_request_phone')
    };
     get notSureYeticon() {
        return $('#contact_request_instance_type_not_sure')
    };
    get questionsYesicon() {
        return $('#questions_yes')
    }
    get questionsList() {
        return $('//*[@id="questions-list"]')
    }
    get agreeicon() {
        return $('#contact_request_agreed_to_terms')
    }

}
module.exports = new trialRequestPage();