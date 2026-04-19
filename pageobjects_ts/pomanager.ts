 import { LoginPage } from "../pageobjects_ts/login.page"
 import {RegisterPage} from "../pageobjects_ts/register.page"
import {Page} from "@playwright/test"

export  class POManager{
    readonly page:Page
    readonly loginPage:LoginPage    
    readonly registerPage:RegisterPage

    constructor(page:Page){
        this.page=page
        this.loginPage = new LoginPage(this.page)
        this.registerPage= new RegisterPage(this.page) 
    }
    getLoginPage(){
        return this.loginPage
    }

    getRegisterPage(){
        return this.registerPage

    }
}
