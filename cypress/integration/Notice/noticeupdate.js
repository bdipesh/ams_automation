import notice from "../../fixtures/test-data/notice.json"

Given('I want to update notice details', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I select a the notice i want to update', () => {
    cy.get("#email").type(notice.email)
    cy.get("#password").type(notice.password)
    cy.get("#loginButton").click()
    cy.wait(2000)
    cy.get("#closeSnack").click()
    cy.wait(2000)
    cy.get("#navBar").click({force:true})
    cy.get("#editNotice").click({force:true})
    cy.get("#updatedPost").clear()
    cy.get("#updatedPost").type(notice.notice)
})

When('I click on update button in the card', () => {
    cy.get("#clickButton").click()
});

Then('Notice is updated successfully', (content) => {
    cy.title().should("eq","Notice | AMS")
});

