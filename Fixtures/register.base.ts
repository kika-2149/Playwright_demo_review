
import {test as base} from "@playwright/test"
import {RegisterPage} from "../pageobjects_ts/register.page"
import {Assert} from "../helpers/assert"
import{ testData} from "../data/register.data"

type MyFixtures={
    registerPage:RegisterPage,
    assert:Assert,
    testData: typeof testData
}
export const test=base.extend<MyFixtures>({
    registerPage: async({page}, use)=>{
        use( new RegisterPage(page))
    },
    
        assert:async({page},use)=>{
            use( new Assert(page))

        },
        testData:async({page},use)=>{
            use(testData)
        }
    
})