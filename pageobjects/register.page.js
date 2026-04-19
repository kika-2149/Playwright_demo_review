// This page is in reference to the toolstation.nl Registeration Page . 

import { Selector } from "../helpers/selector"

export default  class RegisterPage {

    constrcutor(page){
        this.page=page
        this.selector= new Selector(page)
        //Contact Details 
        this.title_data_testid= this.selector.getByTestId('[data-testid="signup-title-selectbox-input"]')
        //Sir and Madam data test id 
        this.sir_data_testid=this.selector.getByTestId('[data-testid="option-0-signup-title-selectbox"]')
        this.madam_data_testid=this.selector.getByTestId('[data-testid="option-1-signup-title-selectbox"]')

        this.firstname_data_testid=this.selector.getByTestId('[data-testid="signup-first-name-input-field"]')
        this.lastname_data_testid=this.selector.getByTestId('[data-testid="signup-last-name-input-field"]')
        this.email_data_testid=this.selector.getByTestId('[data-testid="signup-email-address-input-field"]')
        this.phone_data_testid=this.selector.getByTestId('data-testid="signup-mobile-number-input-field"')
        this.company_name_data_testid=this.selector.getByTestId('[data-testid="signup-company-name-field"]')
        this.password_data_testid=this.selector.getByTestId('[data-testid="signup-password-input-field"]')
       
        //Address Details 
        this.street_data_testid=this.selector.getByTestId('[data-testid="signup-address-form-street-input"]')
        this.housenumber_data_testid=this.selector.getByTestId('[data-testid="signup-address-form-house_number-input"]')
        this.additional__house_number_data_testid=this.selector.getByTestId('[data-testid="signup-address-form-house_number_addition-input"]')
        this.place_data_testid=this.selector.getByTestId('[data-testid="signup-address-form-place-input"]')
        this.postalcode_data_testid=this.selector.getByTestId('[data-testid="signup-address-form-house_number_addition-input"]')
        //other details
        this.checkbox_terms_conditions_data_testid=this.selector.getByTestId('[data-testid="signup-terms-checkbox-input"]')
        this.create_account_button_data_testid=this.selector.getByTestId('[data-testid="atom-button-label"]')
        this.log_in_link_data_testid=this.selector.getByTestId('[data-testid="login-navigate-button"]')

    }

    async validRegister(){
        await this.firstname_data_testid.fill("")
        await this.lastname_data_testid.fill("")
        await this.email_data_testid.fill("")
        await this.phone_data_testid.fill("")
        await this.company_name_data_testid.fill("")
        await this.password_data_testid.fill("")

        //Address details logging in now 
        await this.street_data_testid.fill("")
        await this.housenumber_data_testid.fill("")
        await this.postalcode_data_testid.fill("")
        await this.place_data_testid.fill("")
        await  this.checkbox_terms_conditions_data_testid.click()
        await this.create_account_button_data_testid.click()


    }
}