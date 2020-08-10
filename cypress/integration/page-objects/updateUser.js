/// <reference types="cypress" />

class UpdateUserTest {
    updateUserData(email, password, name) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.wait(1000)
        cy.contains('Profile').click({force:true})
        cy.get("#updateProfile").click({force:true})
        cy.get("#userName").clear()
        cy.get("#userName").type(name)
        cy.get("#saveTeacherButton").click({force:true})
        cy.wait(1000)
    }

    updatePassword(email, password, newPassword) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.wait(1000)
        cy.contains('Profile').click({force:true})
        cy.get("#updatePassword").click({force:true})
        cy.get("#oldPassword").type(password)
        cy.get("#newPassword").type(newPassword)
        cy.get("#repeatPassword").type(newPassword)
        cy.get("#savePassword").click()
        cy.wait(1000)
    }
}

export default UpdateUserTest