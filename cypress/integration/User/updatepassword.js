import updateUser from "../../fixtures/test-data/user.json"

Given('I want to change password', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I type in the data', () => {
    cy.get("#email").type(updateUser.email)
    cy.get("#password").type(updateUser.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.wait(1000)
    cy.contains('Profile').click({force:true})
    cy.get("#updatePassword").click({force:true})
    cy.get("#oldPassword").type(updateUser.password)
    cy.get("#newPassword").type(updateUser.newPassword)
    cy.get("#repeatPassword").type(updateUser.newPassword)
})

When('I click on save button', () => {
    cy.get("#savePassword").click()
});

Then('Password is updated successfully', (content) => {
    cy.title().should("eq","My Profile | AMS")
});

