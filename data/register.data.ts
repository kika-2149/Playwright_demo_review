export const testData = {

    "valid_credentials": {
        "salutation": "sir",
        "first_name": "Amanda",
        "last_name": "Test",
        "email_address": "amanda" + Date.now() + "@ts.com",
        "phone_number": "4389781212",
        "password": "Mayank-t002",
        "street": "Keizersgracht",
        "house_number": "123",
        "postal_code": "1015 CJ",
        "place": "Amsterdam"
    },
    "empty_credentials": {
        "salutation": "",
        "first_name": "",
        "last_name": "",
        "email_address": "",
        "phone_number": "",
        "password": "",
        "street": "",
        "house_number": "",
        "postal_code": "",
        "place": ""
    },
    "already_registered_email_credentials": {
        "salutation": "sir",
        "first_name": "Amanda",
        "last_name": "Test",
        "email_address": "at@ts.com",
        "phone_number": "4389781212",
        "password": "Mayank-t002",
        "street": "Keizersgracht",
        "house_number": "123",
        "postal_code": "1015 CJ",
        "place": "Amsterdam"
    },
    "invalid_email_credentials": {
        "salutation": "sir",
        "first_name": "Amanda",
        "last_name": "Test",
        "email_address": "invalidemail",
        "phone_number": "4389781212",
        "password": "Mayank-t002",
        "street": "Keizersgracht",
        "house_number": "123",
        "postal_code": "1015 CJ",
        "place": "Amsterdam"
    },
    "invalid_phone_credentials": {
        "salutation": "sir",
        "first_name": "Amanda",
        "last_name": "Test",
        "email_address": "amanda_phone_test@ts.com",
        "phone_number": "12345",
        "password": "Mayank-t002",
        "street": "Keizersgracht",
        "house_number": "123",
        "postal_code": "1015 CJ",
        "place": "Amsterdam"
    },
    "invalid_password_credentials": {
        "salutation": "sir",
        "first_name": "Amanda",
        "last_name": "Test",
        "email_address": "amanda_invalid_password@ts.com",
        "phone_number": "4389781212",
        "password": "pass",
        "street": "Keizersgracht",
        "house_number": "123",
        "postal_code": "1015 CJ",
        "place": "Amsterdam"
    },
    "placeholder_text": {
        "first_name": "Voornaam *",
        "last_name": "Achternaam *",
        "email": "E-mailadres *",
        "telephone": "Telefoonnummer *",
        "company": "Vul je bedrijfsnaam in",
        "password": "Vul je wachtwoord in *",
        "address_lookup": "Voer postcode in of zoek adres",
        "street": "Straat*",
        "house_number": "Huisnummer*",
        "postcode": "Postcode*",
        "place": "Plaats*"

    },
    "validation_messages": {
        "first_name": "Voornaam is vereist.",
        "last_name": "Achternaam is vereist.",
        "email": "E-mail is vereist.",
        "invalid_email": "Voer een geldig e-mailadres in.",
        "telephone": "Het telefoonnummer moet 10 cijfers bestaan",
        "password": "Wachtwoord is vereist.",
        "invalid_password":"Je wachtwoord voldoet niet aan alle vereisten. Controleer de regels hieronder en pas je wachtwoord aan.",
        "address": "Volledig adres is vereist.",
        "accept_terms_and_conditions": "Accepteer de voorwaarden om verder te gaan.",
        "signup_button": "Velden gemarkeerd als * zijn verplicht",
    },
    "register_url": "https://www.toolstation.nl/register",
    "login_url": "https://www.toolstation.nl/login",
    "url": "https://www.toolstation.nl/",
    "title": "Gereedschap voor de professional Toolstation",
    "register_title": "Toolstation | Sign Up",
    "login_title":"Toolstation | Inloggen",
    "first_name_validation_text": "Voornaam is vereist.", // first name validation 
    "last_name_validation_text": "Achternaam is vereist.", // last name validation 
    "email_address_validation_text": "E-mail is vereist.", // email validation 
    "telephone_validation_text": "Het telefoonnummer moet 10 cijfers bestaan",
    "password_validation_text": "Wachtwoord is vereist.",
    "address_validation_text": "Volledig adres is vereist.",
    "accept_terms_conditions_checkbox_validation_text": "Accepteer de voorwaarden om verder te gaan.",
    "sign_in_validation_text": "Velden gemarkeerd als * zijn verplicht",
    "already_registered_email_validatiion_text": "Er bestaat al een account met dit e-mailadres. Log in met je bestaande account of reset je wachtwoord als je het vergeten bent."

}