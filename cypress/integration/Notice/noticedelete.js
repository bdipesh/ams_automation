import notice from "../../fixtures/test-data/notice.json"

Given('I want to delete notice', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I select a the notice i want to delete', () => {
    cy.get("#email").type(notice.email)
    cy.get("#password").type(notice.password)
    cy.get("#loginButton").click()
    cy.wait(2000)
    cy.get("#closeSnack").click()
    cy.wait(2000)
    cy.get("#navBar").click({force:true})
    cy.get("#delete").click({force:true})
})

When('I click on delete button', () => {
    cy.get("#clickButton").click()
});

Then('Notice is deleted successfully', (content) => {
    cy.title().should("eq","Notice | AMS")
});

