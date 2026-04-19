import {Selector} from "../helpers/selector"
// This page is in reference to the toolstation.com login page 
export  default class LoginPage{
 

    constructor(page){
        this.page=page
        this.selector= new Selector(page)

        this.email_data_testid=this.selector.getByTestId('[data-testid="signin-email-address-input-field"]')
        this.password_data_testid=this.selector.getByTestId('[data-testid="signin-password-input-field"]')
        this.signin_data_testid=this.selector.getByTestId('[data-testid="signin-signin-button"]')
        this.checkbox_remember_me_data_testid=this.selector.getByTestId('[data-testid="checkbox-input"]')
        this.forgot_password_data_testid=this.selector.getByTestId("[data-testid='signin-forgot-password-link']")
        this.create_new_account_data_testid=this.selector.getByTestId("[data-testid='signin-signup-link']")
    }

    async goTo(){
        await this.page.goto("https://www.toolstation.nl/login")
    }

    async validLogin(user_email,user_password){
        await this.email_data_testid.fill(user_email)
        await this.password_data_testid.fill(user_password)
        await this.signin_data_testid.click()

    }
}