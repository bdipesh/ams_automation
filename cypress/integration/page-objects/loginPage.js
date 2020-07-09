/// <reference types="cypress" />

import loginData from "../../fixtures/test-data/login.json";

class LoginTest {
     doLogin(email, password) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
    }
}

export default LoginTest