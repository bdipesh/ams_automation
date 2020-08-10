import updateUser from "../../fixtures/test-data/user.json"

Given('I want to update Teacher profile', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I type in the required data', () => {
    cy.get("#email").type(updateUser.email)
    cy.get("#password").type(updateUser.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.wait(1000)
    cy.contains('Profile').click({force:true})
    cy.get("#updateProfile").click({force:true})
    cy.get("#userName").clear()
    cy.get("#userName").type(updateUser.name)
})

When('I click on update button', () => {
    cy.get("#saveTeacherButton").click({force:true})
});

Then('Profile is updated successfully', (content) => {
    cy.title().should("eq","My Profile | AMS")
});

