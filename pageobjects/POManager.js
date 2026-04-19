import  LoginPage from "./login.page"
import RegisterPage from "./register.page"

export  default class POManager{

    constructor(page){
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