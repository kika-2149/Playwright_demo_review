
// This page is in reference to the toolstation.nl Registeration Page . 
import { Locator, Page } from "@playwright/test";
import { Selector } from "../helpers/selector";
import { Assert } from "../helpers/assert"
import { testData } from "../data/register.data";


export class RegisterPage {

    readonly page: Page;
    ///titles
    readonly enter_your_contact_details_text: Locator;
    readonly create_a_new_account_data_testid: Locator;
    readonly title_data_testid: Locator;
    readonly sir_data_testid: Locator;
    readonly madam_data_testid: Locator;
    readonly firstname_data_testid: Locator;
    readonly lastname_data_testid: Locator;
    readonly email_data_testid: Locator;
    readonly phone_data_testid: Locator;
    readonly company_name_data_testid: Locator;
    readonly password_data_testid: Locator;
    readonly street_data_testid: Locator;
    readonly housenumber_data_testid: Locator;
    readonly additional__house_number_data_testid: Locator;
    readonly place_data_testid: Locator;
    readonly postalcode_data_testid: Locator
    readonly checkbox_terms_conditions_data_testid: Locator;
    readonly create_account_button_data_testid: Locator;
    readonly log_in_link_data_testid: Locator;
    readonly selector: Selector;
    readonly assert: Assert;

    // Cookies Privacy Policy 
    readonly accept_consent: Locator;
    readonly privacy_terms_conditions_dailog: Locator
    // Validation messages 
    readonly first_name_validation_text: Locator
    readonly last_name_validation_text: Locator;
    readonly email_validation_data_testid: Locator;
    readonly telephone_validation_text: Locator;
    readonly address_validation_text: Locator;
    readonly accept_terms_conditions_validation_text: Locator
    readonly signup_validation_text: Locator;
    readonly password_validation_text: Locator;
    readonly invalid_password_validation_text:Locator;

    readonly my_account_header_button_data_testid: Locator;
    readonly inlogin_header_button_data_testid: Locator;
    readonly already_registered_email_validation_message_data_testid: Locator;

    //Login page Locators 
    readonly  login_email_data_testid:Locator;
    readonly login_password_data_testid:Locator;
    readonly login_signin_data_testid:Locator;
    readonly login_checkbox_remember_me_data_testid:Locator;
    readonly login_forgot_password_data_testid:Locator;
    readonly login_create_new_account_data_testid:Locator;


    constructor(page: Page) {
        this.page = page
        this.selector = new Selector(page)
        this.assert = new Assert(page)
        // Heading
        this.enter_your_contact_details_text = this.selector.getByText("Vul je contactgegevens in")
        this.create_a_new_account_data_testid = this.selector.getByTestId("signup-heading-text")
        //Contact Details 
        this.title_data_testid = this.selector.getByTestId("signup-title-selectbox-input")
        //Sir and Madam data test id 
        this.sir_data_testid = this.selector.getByTestId("option-0-signup-title-selectbox")
        this.madam_data_testid = this.selector.getByTestId("option-1-signup-title-selectbox")

        this.firstname_data_testid = this.selector.getByTestId("signup-first-name-input-field")
        this.lastname_data_testid = this.selector.getByTestId("signup-last-name-input-field")
        this.email_data_testid = this.selector.getByTestId("signup-email-address-input-field")
        this.phone_data_testid = this.selector.getByTestId("signup-mobile-number-input-field")
        this.company_name_data_testid = this.selector.getByTestId("signup-company-name-field")
        this.password_data_testid = this.selector.getByTestId("signup-password-input-field")

        //Address Details 
        this.street_data_testid = this.selector.getByTestId("signup-address-form-street-input")
        this.housenumber_data_testid = this.selector.getByTestId("signup-address-form-house_number-input")
        this.additional__house_number_data_testid = this.selector.getByTestId("signup-address-form-house_number_addition-input")
        this.place_data_testid = this.selector.getByTestId("signup-address-form-place-input")
        this.postalcode_data_testid = this.selector.getByTestId("signup-address-form-postal_code-input")
        //other details
        this.checkbox_terms_conditions_data_testid = this.selector.getByTestId("signup-terms-checkbox-input")
        this.create_account_button_data_testid = this.selector.getByTestId("signup-button")
        this.log_in_link_data_testid = this.selector.getByTestId("login-navigate-button")
        this.accept_consent = this.selector.id("onetrust-accept-btn-handler")
        this.privacy_terms_conditions_dailog = this.selector.class("ot-sdk-row")

        // registration validation messages locator 
        this.first_name_validation_text = this.selector.getByText("Voornaam is vereist.")
        this.last_name_validation_text = this.selector.getByText("Achternaam is vereist.")
        this.email_validation_data_testid = this.selector.getByTestId("sign-up-email-validation-message")
        this.telephone_validation_text = this.selector.getByText("Het telefoonnummer moet 10 cijfers bestaan")
        this.password_validation_text = this.selector.getByText("Wachtwoord is vereist.")


        // Accept terms and conditions validation text 
        this.accept_terms_conditions_validation_text = this.selector.getByText("Accepteer de voorwaarden om verder te gaan.")
        //Sign In Validation text 
        this.signup_validation_text = this.selector.getByText("Velden gemarkeerd als * zijn verplicht")
        // Address validation text 
        this.address_validation_text = this.selector.getByText("Volledig adres is vereist.")

        this.my_account_header_button_data_testid = this.selector.getByTestId("header-auth_header-link-logout")
        this.inlogin_header_button_data_testid = this.selector.getByTestId("header-auth_header-link-login")
        this.already_registered_email_validation_message_data_testid = this.selector.getByTestId("sign-up-email-validation-message")
        this.login_email_data_testid= this.selector.getByTestId("signin-email-address-input-field")
        this.login_password_data_testid=this.selector.getByTestId("signin-password-input-field")
        this.login_signin_data_testid=this.selector.getByTestId("signin-signin-button")
        this.login_checkbox_remember_me_data_testid=this.selector.getByTestId("checkbox-input")
        this.login_forgot_password_data_testid=this.selector.getByTestId("signin-forgot-password-link")
        this.login_create_new_account_data_testid=this.selector.getByTestId("signin-signup-link")
        this.invalid_password_validation_text=this.selector.getByText("Je wachtwoord voldoet niet aan alle vereisten. Controleer de regels hieronder en pas je wachtwoord aan.")

    }

    async goTo() {
        await this.page.goto("https://www.toolstation.nl/register")
        await this.accept_consent.click()
    }

    async register(salutation: string, firstname: string, lastname: string, email: string,
        phone: string, password: string, street: string,
        house_number: string, postalcode: string, place: string) {

        //selecting the salutation
        await this.title_data_testid.click()
        if (salutation.toLowerCase() == "sir") {
            await this.sir_data_testid.click()
        }
        else if (salutation.toLowerCase() == "madam") {
            await this.madam_data_testid.click()
        }

        await this.firstname_data_testid.fill(firstname)
        await this.lastname_data_testid.fill(lastname)
        await this.email_data_testid.fill(email)
        await this.phone_data_testid.fill(phone)

        await this.password_data_testid.fill(password)

        //Address details logging in now 
        await this.street_data_testid.fill(street)
        await this.housenumber_data_testid.fill(house_number)
        await this.postalcode_data_testid.fill(postalcode)
        await this.place_data_testid.fill(place)
        if(firstname.toLowerCase() == ""){
            await this.checkbox_terms_conditions_data_testid.uncheck();

        }
        else{
              await  this.checkbox_terms_conditions_data_testid.click()
        }
      
        await this.create_account_button_data_testid.click()

    }

    async validateEmptyRegistration() {
        //Validation messages will be checked in the spec file
        await this.first_name_validation_text.waitFor()
        await this.last_name_validation_text.waitFor()
        await this.email_validation_data_testid.waitFor()
        await this.telephone_validation_text.waitFor()
        await this.password_validation_text.waitFor()
        await this.accept_terms_conditions_validation_text.waitFor()
        await this.signup_validation_text.waitFor()
        await this.address_validation_text.waitFor()
    }
    async clickLoginlink(){
        await this.log_in_link_data_testid.click()
    }






  
}
