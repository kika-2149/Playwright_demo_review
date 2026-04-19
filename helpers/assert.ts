import {Page, Locator, expect, Response} from "@playwright/test"

export class Assert{
    readonly page: Page ;
    constructor(page:Page){
        this.page=page
    }

 async isVisible(locator:Locator,message?:string){
    await  expect(locator, message).toBeVisible()
 }
 async isNotVisible(locator:Locator,message?:string){
   await expect(locator,message).not.toBeVisible()
 }
 async hasURL(expectUrl:string){
    await expect(this.page).toHaveURL(expectUrl)
 }
 async haveTitle(expectTitle:string){
    await expect(this.page).toHaveTitle(expectTitle)

 }
 async hasValue(locator:Locator,value:string){
    await expect(locator).toHaveValue(value)
 }
 async containsText(locator:Locator,value:string){
    await expect(locator).toContainText(value)
 }
 async haveText(locator:Locator,value:string){
    await expect(locator).toHaveText(value)
 }
 async havePlaceHolderText(locator:Locator,value:string){
   const placeholder=await locator.getAttribute('placeholder')
   expect(placeholder).toBe(value)
 }
 // for status code validation 

 async hasStatusCode(response: Response, expectStatus:number=200 ){
   expect(response).not.toBeNull()
   await expect(response!.status()).toBe(expectStatus)  // ! is used to make sure that the value is not null 
 }




}