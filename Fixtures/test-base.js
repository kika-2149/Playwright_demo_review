import {test as base} from "@playwright/test"
import loginData from "../utils/testdata.json"
import POManager from "../pageobjects/POManager"

// Usage of Fixtures using Playwright 
export const test= base.extend({
    testData: async({}, use )=>{
        await use(loginData)
    },
    poManager: async({page},use)=>{
        await use( new POManager(page))
    }
})