/// <reference types="cypress" />
import userData from "../../fixtures/test-data/user.json"
import userTest from "../page-objects/updateUser";
const user = new userTest()
context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/account/login')
    })
    // https://on.cypress.io/interacting-with-elements

    it('The user log in and change their profile', () => {
        user.updateUserData(userData.email, userData.password, userData.name)
        cy.title().should("eq","My Profile | AMS")
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully updated")
                expect(userData.name).to.exist
            })

    })

    it('The user log in and changes password', () => {
        user.updatePassword(userData.email, userData.password,userData.newPassword)

        cy.title().should("eq","Login | AMS")
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully updated")
                expect(userData.newPassword).to.exist
            })
    })
})
// https://on.cypress.io/type