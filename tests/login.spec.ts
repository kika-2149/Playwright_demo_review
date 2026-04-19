import {expect} from "@playwright/test";
import {test} from "../Fixtures/login.base"


// Login using valid credentials 

test("@Web Valid Login",async({loginPage,assert,page,testData})=>{


await test.step('Given user is on login page', async () => {
  await loginPage.goTo();
});

await test.step('When user enters  valid credentials ', async () => {
  await loginPage.Login(testData.valid_credentials.email,testData.valid_credentials.password)
});

await test.step('The user should be logged in ', async () => {
     await assert.hasURL(testData.url)
     await assert.haveTitle(testData.title)
     await assert.haveText(loginPage.my_account_header,testData.my_account_text)

    // The user should be able to login successfully

});

});

// Login using Empty Credentials 
test("@Web Login using Empty Credentials", async({page, loginPage,assert,testData})=>{



    await test.step("Given user is on the login page",async()=>{
      await loginPage.goTo()
    })
    await test.step("When the user enter empty credentials", async()=>{
      await loginPage.Login(testData.empty_credentials.email,testData.empty_credentials.password)

    })
    await test.step("The user should be getting a validation message on clicking the Sign In button", async()=>{
      await assert.haveText(loginPage.email_validation_message_data_testid,testData.email_validation_text)
      await assert.haveText(loginPage.password_validation_message_data_testid,testData.password_validation_text)
      await assert.hasURL(testData.login_url)
      await assert.haveTitle(testData.login_title)

    })

})
// Login using  invalid email and valid password
test("@Web Login using invalid email and valid password", async({page,loginPage,assert,testData})=>{


  await test.step("Given user is on the login page",async()=>{
    await loginPage.goTo()
  })
  await test.step("When the user enter an invalid email and a valid password",async()=>{
    await loginPage.Login(testData.only_valid_password_credentials.email,testData.only_valid_password_credentials.password)

  })
  await test.step("The user should be getting a validation message for the incorrect email ", async()=>{
    await assert.haveText(loginPage.email_validation_message_data_testid,testData.email_format_validation_text)
    await assert.hasURL(testData.login_url)
    await assert.haveTitle(testData.login_title)

  })

})
 // Login using valid email and invalid password 
 test("@web Login using valid email and invalid password", async({page,loginPage,assert,testData})=>{
 
    await test.step("Given user is on the login page",async()=>{
    await loginPage.goTo()
  })
  await test.step("When the user enters  a valid email and invalid password ",async()=>{
    await loginPage.Login(testData.only_valid_email_credentials.email,testData.only_valid_email_credentials.password)

  })
  await test.step("The user should be getting a validation message for the incorrect email ", async()=>{
    await assert.haveText(loginPage.validation_message_data_testid,testData.validation_message)
    await assert.hasURL(testData.login_url)
    await assert.haveTitle(testData.login_title)

  })
})
// Login using invalid email and invalid password
test("@Web Login using invalid email and invalid password", async({page, loginPage, assert,testData})=>{

    await test.step("Given user is on the login page",async()=>{
    await loginPage.goTo()
  })
    await test.step("When the user enters  a  invalid  email and invalid password ",async()=>{
    await loginPage.Login(testData.invalid_credentials.email,testData.valid_credentials.password)

  })
   await test.step("The user should be getting a validation message for the incorrect email ", async()=>{
    await assert.haveText(loginPage.validation_message_data_testid,testData.validation_message)
    await assert.hasURL(testData.login_url)
    await assert.haveTitle(testData.login_title)

  })


})
//  Another Login scenario to be used in hee . 

// Registration link on Login page redirects to Registration page
test("@Web Registration link on Login page redirects to Registration page", async({page, loginPage, assert,testData})=>{

    await test.step("Given user is on the login page", async()=>{
        await loginPage.goTo()
    })

    await test.step("When user clicks on the Create new account link", async()=>{
        await loginPage.navigateToRegistration()
    })

    await test.step("Then the user should be redirected to the Registration page", async()=>{
        await assert.hasURL(testData.register_url)
        await assert.haveTitle(testData.register_title)
    })
})

// Forgot Password link on Login page redirects to Forgot Password page
test("@Web Forgot Password link on Login page redirects to Forgot Password page", async({page, loginPage, assert,testData})=>{

    await test.step("Given user is on the login page", async()=>{
        await loginPage.goTo()
    })

    await test.step("When user clicks on the Forgot Password link", async()=>{
        await loginPage.navigateToForgotPassword()
    })

    await test.step("Then the user should be redirected to the Forgot Password page", async()=>{
        await assert.hasURL(testData.forgot_password_url)
        await assert.haveTitle(testData.forgot_password_title)
    })
})

