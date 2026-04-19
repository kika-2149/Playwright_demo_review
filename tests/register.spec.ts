import { test } from "../Fixtures/register.base"

test("Register using empty spaces", async ({ page, registerPage, assert, testData }) => {

    await test.step("Given user is on the registeration page", async () => {
        await registerPage.goTo();

    })
    await test.step("User does not enters any value in the mandatory fields", async () => {
        await registerPage.register(testData.empty_credentials.salutation, testData.empty_credentials.first_name,
            testData.empty_credentials.last_name,
            testData.empty_credentials.email_address,
            testData.empty_credentials.phone_number,
            testData.empty_credentials.password,
            testData.empty_credentials.street,
            testData.empty_credentials.house_number,
            testData.empty_credentials.postal_code,
            testData.empty_credentials.place)
        //to Validate the empty elements 

    })
    await test.step("The user should be getting a validation message for keeping the fields empty ", async () => {
        //validation code needs to be placed here . 
     
        
        // Assertions for empty registration validation
        await assert.isVisible(registerPage.first_name_validation_text)
        await assert.isVisible(registerPage.last_name_validation_text)
        await assert.isVisible(registerPage.email_validation_data_testid)
        await assert.isVisible(registerPage.telephone_validation_text)
        await assert.isVisible(registerPage.password_validation_text)
        await assert.isVisible(registerPage.accept_terms_conditions_validation_text)
        await assert.isVisible(registerPage.signup_validation_text)
        await assert.isVisible(registerPage.address_validation_text)

        // Validate text content
        await assert.haveText(registerPage.first_name_validation_text, testData.validation_messages.first_name)
        await assert.haveText(registerPage.last_name_validation_text, testData.validation_messages.last_name)
        await assert.haveText(registerPage.email_validation_data_testid, testData.validation_messages.email)
        await assert.haveText(registerPage.telephone_validation_text, testData.validation_messages.telephone)
        await assert.haveText(registerPage.password_validation_text, testData.validation_messages.password)
        await assert.haveText(registerPage.accept_terms_conditions_validation_text, testData.validation_messages.accept_terms_and_conditions)
        await assert.haveText(registerPage.address_validation_text, testData.validation_messages.address)
        await assert.haveText(registerPage.signup_validation_text, testData.validation_messages.signup_button)
    })
})
// Valid Registration
test("Valid Registration", async ({ registerPage, assert, testData }) => {
    await test.step("Given user is on the registeration page", async () => {
        await registerPage.goTo();

    })
    await test.step("User enter valid input", async () => {
        await registerPage.register(testData.valid_credentials.salutation, testData.valid_credentials.first_name, testData.valid_credentials.last_name,
            testData.valid_credentials.email_address, testData.valid_credentials.phone_number, testData.valid_credentials.password,
            testData.valid_credentials.street, testData.valid_credentials.house_number,
            testData.valid_credentials.postal_code, testData.valid_credentials.place
        )
    })
    await test.step("User should be able to register successfully", async () => {
        
        
        // Assertions for successful registration
        await assert.hasURL(testData.url)
        await assert.haveTitle(testData.title)
        await assert.isVisible(registerPage.my_account_header_button_data_testid)
        await assert.isNotVisible(registerPage.inlogin_header_button_data_testid)
    })
})
// tries to register using already registered email 
test("Registration Using already registered email", async ({ registerPage, assert, testData }) => {
    await test.step("Given user is on the registeration page", async () => {
        await registerPage.goTo();

    })
    await test.step("User enter valid input", async () => {
        await registerPage.register(testData.already_registered_email_credentials.salutation,
            testData.already_registered_email_credentials.first_name,
            testData.already_registered_email_credentials.last_name,
            testData.already_registered_email_credentials.email_address
            , testData.already_registered_email_credentials.phone_number,
            testData.already_registered_email_credentials.password,
            testData.already_registered_email_credentials.street,
            testData.already_registered_email_credentials.house_number,
            testData.already_registered_email_credentials.postal_code,
            testData.already_registered_email_credentials.place
        )
    })

    await test.step("User should be  getting a validation message for attempting to register using an already registered email ", async () => {
        
        
        // Assertions for already registered email
        await assert.isVisible(registerPage.already_registered_email_validation_message_data_testid)
        await assert.haveText(registerPage.already_registered_email_validation_message_data_testid,
            testData.already_registered_email_validatiion_text
        )
        await assert.haveText(registerPage.signup_validation_text, testData.validation_messages.signup_button)
    })

})

// Register using invalid email
test("Register using invalid email", async ({ registerPage, assert, testData }) => {
    await test.step("Given user is on the registeration page", async () => {
        await registerPage.goTo();

    })
    await test.step("User enter input with invalid email", async () => {
        await registerPage.register(testData.invalid_email_credentials.salutation,
            testData.invalid_email_credentials.first_name,
            testData.invalid_email_credentials.last_name,
            testData.invalid_email_credentials.email_address,
            testData.invalid_email_credentials.phone_number,
            testData.invalid_email_credentials.password,
            testData.invalid_email_credentials.street,
            testData.invalid_email_credentials.house_number,
            testData.invalid_email_credentials.postal_code,
            testData.invalid_email_credentials.place
        )
    })

    await test.step("User should be getting a validation message for invalid email format", async () => {
       
        
        // Assertions for invalid email
        await assert.isVisible(registerPage.email_validation_data_testid)
        await assert.haveText(registerPage.email_validation_data_testid, testData.validation_messages.invalid_email)
        await assert.haveText(registerPage.signup_validation_text, testData.validation_messages.signup_button)
    })

})

// Register using invalid phone number


test("Register using invalid phone number", async ({ registerPage, assert, testData }) => {
    await test.step("Given user is on the registeration page", async () => {
        await registerPage.goTo();
    })

    await test.step("User enter input with invalid phone number", async () => {
        await registerPage.register(testData.invalid_phone_credentials.salutation,
            testData.invalid_phone_credentials.first_name,
            testData.invalid_phone_credentials.last_name,
            testData.invalid_phone_credentials.email_address,
            testData.invalid_phone_credentials.phone_number,
            testData.invalid_phone_credentials.password,
            testData.invalid_phone_credentials.street,
            testData.invalid_phone_credentials.house_number,
            testData.invalid_phone_credentials.postal_code,
            testData.invalid_phone_credentials.place
        )
    })

    await test.step("User should be getting a validation message for invalid phone number", async () => {
        
        
        // Assertions for invalid phone
        await assert.isVisible(registerPage.telephone_validation_text)
        await assert.haveText(registerPage.telephone_validation_text, testData.validation_messages.telephone)
        await assert.haveText(registerPage.signup_validation_text, testData.validation_messages.signup_button)
    })
})

test("Register using invalid password", async ({ registerPage, assert, testData }) => {
    await test.step("Given user is on the registeration page", async () => {
        await registerPage.goTo();
    })

    await test.step("User enter input with invalid password", async () => {
        await registerPage.register(testData.invalid_password_credentials.salutation,
            testData.invalid_password_credentials.first_name,
            testData.invalid_password_credentials.last_name,
            testData.invalid_password_credentials.email_address,
            testData.invalid_password_credentials.phone_number,
            testData.invalid_password_credentials.password,
            testData.invalid_password_credentials.street,
            testData.invalid_password_credentials.house_number,
            testData.invalid_password_credentials.postal_code,
            testData.invalid_password_credentials.place
        )
    })

    await test.step("User should be getting a validation message for invalid password rules", async () => {
        
        
        // Assertions for invalid password
        await assert.isVisible(registerPage.invalid_password_validation_text)
        await assert.haveText(registerPage.invalid_password_validation_text, testData.validation_messages.invalid_password)
        await assert.haveText(registerPage.signup_validation_text, testData.validation_messages.signup_button)
    })
})

test("Login link on registration page navigates to login page", async ({ registerPage, assert, testData }) => {
    await test.step("Given user is on the registeration page", async () => {
        await registerPage.goTo();
    })

    await test.step("When user clicks the login link", async () => {
        await registerPage.clickLoginlink()
        
    
    })

    await test.step("Then the login page should load successfully", async () => {
        // Assertions for login page navigation and elements
        await assert.hasURL(testData.login_url)
        await assert.haveTitle(testData.login_title)
        await assert.isVisible(registerPage.login_email_data_testid)
        await assert.isVisible(registerPage.login_password_data_testid)
        await assert.isVisible(registerPage.login_signin_data_testid)
        await assert.isVisible(registerPage.login_checkbox_remember_me_data_testid)
        await assert.isVisible(registerPage.login_forgot_password_data_testid)
        await assert.isVisible(registerPage.login_create_new_account_data_testid)
    })
})

// invalid password
// invalid phone number 