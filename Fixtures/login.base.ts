 import {test as base } from "@playwright/test"
 // We are renaming test as base because we would be creating our own custom test 
 import { LoginPage } from "../pageobjects_ts/login.page"
 import { Assert } from "../helpers/assert"
 import { testData } from "../data/login.data"

 type MyFixtures={
    loginPage:LoginPage;
    assert:Assert,
    testData:typeof testData
 }

 export const test=base.extend<MyFixtures>({
    loginPage: async({page}, use)=>{
        await use( new LoginPage(page)) // use is eused to give this object created to the test 
    },
    assert: async({page}, use )=>{
        await use ( new Assert(page))
    },
    testData:async({},use)=>{
        await use(testData)
    }
 })     