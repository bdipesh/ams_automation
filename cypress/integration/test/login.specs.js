/// <reference types="cypress" />
import loginData from "../../fixtures/test-data/login.json"
import LoginTest from "../page-objects/loginPage"
const login = new LoginTest()
context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/account/login')
    })
    // https://on.cypress.io/interacting-with-elements

    it('The user logs in with valid credential and sees the Home page', () => {
        login.doLogin(loginData.email, loginData.password)
        // cy.get(".v-snack__content")
        //     .then(function (message) {
        //         const successMessage = message.text()
        //         expect(successMessage).to.contains("Successfully Login. Welcome to AMS!")
        //     })
        cy.title().should("eq","Notice | Attendance Management System")
    })

    it('The user logs in with invalid Email and sees error message', () => {
        login.doLogin(loginData.invalidEmail, loginData.password)
        // cy.get(".v-snack__content")
        //     .then(function (message) {
        //         const successMessage = message.text()
        //         expect(successMessage).to.contains("Invalid Username or Password.")
        //     })
        cy.title().should("eq","ams_frontend - ams_frontend")
    })

    it('The user logs in with invalid password and sees error message', () => {
        login.doLogin(loginData.email, loginData.invalidPassword)
            // cy.get(".v-snack__content")
            //     .then(function (message) {
            //         const successMessage = message.text()
            //         expect(successMessage).to.contains("Invalid Username or Password.")
            //     })
            cy.title().should("eq","ams_frontend - ams_frontend")
})
})
// https://on.cypress.io/type