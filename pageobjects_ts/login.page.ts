import { Locator,Page,expect } from "@playwright/test";
import { Selector } from "../helpers/selector";
import { Assert } from "../helpers/assert";

export class LoginPage{
    readonly page:Page 
    readonly  email_data_testid:Locator;
    readonly password_data_testid:Locator;
    readonly signin_data_testid:Locator;
    readonly checkbox_remember_me_data_testid:Locator;
    readonly forgot_password_data_testid:Locator;
    readonly create_new_account_data_testid:Locator;
   
    readonly accept_consent:Locator;
    readonly privacy_terms_conditions_dailog:Locator
    readonly my_account_header:Locator;
    // validation message 
    readonly email_validation_message_data_testid:Locator;
    readonly password_validation_message_data_testid: Locator;
    readonly validation_message_data_testid:Locator;

   

     readonly selector:Selector;
     readonly assert:Assert;



    constructor(page:Page){
    this.page=page

    this.selector= new Selector(page)
    this.assert= new Assert(page)
    this.email_data_testid= this.selector.getByTestId("signin-email-address-input-field")
    this.password_data_testid=this.selector.getByTestId("signin-password-input-field")
    this.signin_data_testid=this.selector.getByTestId("signin-signin-button")
    this.checkbox_remember_me_data_testid=this.selector.getByTestId("checkbox-input")
    this.forgot_password_data_testid=this.selector.getByTestId("signin-forgot-password-link")
    this.create_new_account_data_testid=this.selector.getByTestId("signin-signup-link")
    this.accept_consent=this.selector.id("onetrust-accept-btn-handler")
    this.privacy_terms_conditions_dailog=this.selector.class("ot-sdk-row")
    this.my_account_header= this.selector.locator('//a[@href="/account/home"]')

    this.email_validation_message_data_testid= this.selector.getByTestId("signin-email-address-validation-message")
    this.password_validation_message_data_testid=this.selector.getByTestId("sign-in-password-input-field-validation-message")
    this.validation_message_data_testid=this.selector.getByTestId("signin-invalid-credentials")
}

  async goTo(){
      const response=  await this.page.goto("https://www.toolstation.nl/login")
      // validate the response code for the URL 
       this.assert.hasStatusCode(response!,200) // does not allow null values 

        await this.assert.isVisible(this.accept_consent)
        await this.accept_consent.click()
    }

    async Login(user_email:string,user_password:string){
        await this.assert.isVisible(this.email_data_testid)
        await this.email_data_testid.fill(user_email)
        await this.password_data_testid.fill(user_password)
        await this.signin_data_testid.click()


    }

    async navigateToRegistration(){
        await this.create_new_account_data_testid.click()
    }

    async navigateToForgotPassword(){
        await this.forgot_password_data_testid.click()
        
    }

    
  

}