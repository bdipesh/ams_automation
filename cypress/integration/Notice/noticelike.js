import notice from "../../fixtures/test-data/notice.json"

Given('I want to like the notice that are posted', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I select a the notice i want to like', () => {
    cy.get("#email").type(notice.email)
    cy.get("#password").type(notice.password)
    cy.get("#loginButton").click()
    cy.wait(2000)
    cy.get("#closeSnack").click()
    cy.wait(2000)
    cy.get("#navBar").click({force:true})
})

When('I click on like button', () => {
    cy.get("#like").click({force:true})
});

Then('Notice is liked', (content) => {
    cy.title().should("eq","Notice | AMS")
});

